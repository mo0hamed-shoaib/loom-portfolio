"use client"

import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  // Simple, reliable scroll offset calculation
  const getScrollOffset = useCallback(() => {
    if (window.innerWidth >= 1920) return 128; // 3xl:scroll-mt-32 (32 * 4 = 128px)
    if (window.innerWidth >= 768) return 112; // md:scroll-mt-28 (28 * 4 = 112px)
    return 96; // scroll-mt-24 (24 * 4 = 96px)
  }, []);

  // Get the currently visible sections based on layout
  const getVisibleSections = useCallback(() => {
    const sections = [];
    
    for (const sectionId of sectionIds) {
      const elements = document.querySelectorAll(`#${sectionId}`);
      
      // Find the element that's currently visible (not hidden by CSS)
      for (const element of elements) {
        const rect = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element);
        const parentStyles = window.getComputedStyle(element.parentElement!);
        
        // Check if element and its parent are visible and have dimensions
        if (rect.width > 0 && rect.height > 0 && 
            styles.display !== 'none' && 
            styles.visibility !== 'hidden' &&
            parentStyles.display !== 'none' &&
            parentStyles.visibility !== 'hidden') {
          
          // Use getBoundingClientRect to determine if element is in document flow
          const isInDocumentFlow = rect.top !== 0 || rect.bottom !== 0;
          
          if (isInDocumentFlow) {
            sections.push({ id: sectionId, element });
            console.log(`Found visible section ${sectionId}:`, {
              rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
              offsetTop: (element as HTMLElement).offsetTop,
              display: styles.display,
              parentDisplay: parentStyles.display
            });
            break; // Use the first visible element for each section
          }
        }
      }
    }
    
    console.log(`Total visible sections found: ${sections.length}`);
    return sections;
  }, [sectionIds]);

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const visibleSections = getVisibleSections();
    const targetSection = visibleSections.find(s => s.id === sectionId);
    
    if (!targetSection) {
      console.warn(`Visible element with id "${sectionId}" not found`);
      return;
    }

    const { element } = targetSection;
    const rect = element.getBoundingClientRect();
    const offset = getScrollOffset();
    
    // Calculate target position using getBoundingClientRect
    const targetPosition = window.scrollY + rect.top - offset;

    console.log(`Scrolling to ${sectionId}:`, {
      rectTop: rect.top,
      currentScrollY: window.scrollY,
      offset,
      targetPosition,
      rect: rect
    });

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });

    // Immediately update active section for better UX
    setActiveSection(sectionId);
  }, [getScrollOffset, getVisibleSections]);

  useEffect(() => {
    // Function to determine which section is currently active
    const updateActiveSection = () => {
      const visibleSections = getVisibleSections();
      
      if (visibleSections.length === 0) {
        console.warn('No visible sections found');
        return;
      }

      let currentActiveSection = '';
      let maxVisibleArea = 0;

      // Check each visible section to see which one is most visible
      for (const { id, element } of visibleSections) {
        const rect = element.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(window.innerHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Calculate the area of the section that's visible
        const visibleArea = visibleHeight * rect.width;
        
        // Check if this section is more visible than the current best
        if (visibleArea > maxVisibleArea && visibleHeight > 50) {
          maxVisibleArea = visibleArea;
          currentActiveSection = id;
        }
      }

      // If no section is clearly visible, find the one closest to the top of viewport
      if (!currentActiveSection) {
        let closestSection = '';
        let closestDistance = Infinity;

        for (const { id, element } of visibleSections) {
          const rect = element.getBoundingClientRect();
          // Use absolute distance from top of viewport
          const distance = Math.abs(rect.top);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = id;
          }
        }

        currentActiveSection = closestSection;
      }

      if (currentActiveSection && currentActiveSection !== activeSection) {
        console.log(`Active section changed from ${activeSection} to ${currentActiveSection}`);
        setActiveSection(currentActiveSection);
      }
    };

    // Throttle scroll events using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial active section
    updateActiveSection();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, getVisibleSections]);

  return {
    activeSection,
    scrollToSection,
  };
};
