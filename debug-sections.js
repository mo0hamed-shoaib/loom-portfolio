// Debug script to check if sections exist and navigation dock visibility
// Run this in your browser console to see what's happening

console.log('🔍 Debugging Navigation Dock Sections...');

// Check if sections exist
const sectionIds = ['projects', 'tech-stack', 'milestones', 'experience'];

console.log('\n📋 Checking for sections:');
sectionIds.forEach(id => {
    const el = document.getElementById(id);
    console.log(`${id}:`, el ? '✅ found' : '❌ NOT FOUND');
    if (el) {
        console.log(`  - Position: ${el.offsetTop}px from top`);
        console.log(`  - Height: ${el.offsetHeight}px`);
        console.log(`  - Visible: ${el.offsetWidth > 0 && el.offsetHeight > 0 ? 'Yes' : 'No'}`);
        console.log(`  - Bounding rect:`, el.getBoundingClientRect());
    }
});

// Check scroll position
console.log('\n📏 Current scroll position:', window.scrollY);

// Check viewport
console.log('\n🖥️ Viewport info:');
console.log('- Window height:', window.innerHeight);
console.log('- Window width:', window.innerWidth);
console.log('- Breakpoint:', window.innerWidth >= 1280 ? 'Desktop (≥1280px)' : 'Mobile/Tablet (<1280px)');

// Check if navigation dock is rendered
console.log('\n🧭 Navigation dock elements:');
const dockElements = document.querySelectorAll('[aria-label*="section"], [aria-label*="navigation"], nav');
console.log('Found dock elements:', dockElements.length);
dockElements.forEach((el, i) => {
    console.log(`  ${i + 1}.`, el.tagName, el.className);
    console.log(`     - Visible:`, el.offsetWidth > 0 && el.offsetHeight > 0 ? 'Yes' : 'No');
    console.log(`     - Position:`, el.getBoundingClientRect());
});

// Check for any console errors
console.log('\n⚠️ Check the console for any errors above this message.');

// Test scroll offset calculation
const getScrollOffset = () => {
    return window.innerWidth >= 768 ? 112 : 96;
};

console.log('\n🎯 Scroll offset calculation:');
console.log('- Current offset:', getScrollOffset(), 'px');
console.log('- Expected for mobile (<768px): 96px');
console.log('- Expected for desktop (≥768px): 112px');

// Test mobile/tablet simulation
console.log('\n📱 Mobile/Tablet Test:');
console.log('To test mobile/tablet behavior:');
console.log('1. Open DevTools (F12)');
console.log('2. Click the device toggle button (📱)');
console.log('3. Select a mobile device (e.g., iPhone 12)');
console.log('4. Refresh the page');
console.log('5. Run this debug script again');

// Check if sections are properly positioned
console.log('\n📍 Section positioning check:');
sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        console.log(`${id}: ${isInViewport ? '✅ In viewport' : '❌ Not in viewport'}`);
        console.log(`  - Top: ${rect.top}px, Bottom: ${rect.bottom}px`);
        console.log(`  - Viewport height: ${window.innerHeight}px`);
    }
});
