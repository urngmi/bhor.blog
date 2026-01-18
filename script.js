// Feed item expansion
document.querySelectorAll('.feed-item-expand').forEach(button => {
    button.addEventListener('click', () => {
        const feedItem = button.closest('.feed-item');
        
        // Close all other active items
        document.querySelectorAll('.feed-item.active').forEach(item => {
            if (item !== feedItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current item
        feedItem.classList.toggle('active');
    });
});

// Filter section collapse/expand
document.querySelectorAll('.filter-header').forEach(header => {
    header.addEventListener('click', () => {
        const filterSection = header.closest('.filter-section');
        const options = filterSection.querySelector('.filter-options');
        const arrow = header.querySelector('.filter-arrow');
        
        // Toggle options visibility
        if (options.style.display === 'none') {
            options.style.display = 'flex';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            options.style.display = 'none';
            arrow.style.transform = 'rotate(-90deg)';
        }
    });
});

// Clear filters
document.querySelector('.filter-clear').addEventListener('click', () => {
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
});

// Filter functionality (basic implementation)
const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Get all selected filters
        const selectedTypes = Array.from(document.querySelectorAll('.filter-option input[name="type"]:checked'))
            .map(cb => cb.value);
        const selectedTopics = Array.from(document.querySelectorAll('.filter-option input[name="topic"]:checked'))
            .map(cb => cb.value);
        
        // Filter feed items (this is a placeholder - you'd implement actual filtering logic)
        console.log('Selected types:', selectedTypes);
        console.log('Selected topics:', selectedTopics);
        
        // Update feed count
        // const visibleItems = document.querySelectorAll('.feed-item:not([style*="display: none"])').length;
        // document.querySelector('.feed-count').textContent = `(${visibleItems})`;
    });
});

// Sort functionality
document.querySelectorAll('.feed-sort').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all sort buttons
        document.querySelectorAll('.feed-sort').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Implement sorting logic here
        console.log('Sort by:', button.textContent);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to decoration elements (optional)
const decorations = document.querySelectorAll('.decoration');
decorations.forEach((decoration, index) => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random() * 2;
    
    decoration.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});

// CSS animation for decorations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }
`;
document.head.appendChild(style);

// Handle "Read" button clicks
document.querySelectorAll('.button').forEach(button => {
    if (button.textContent === 'Read') {
        button.addEventListener('click', () => {
            // Navigate to article page or open article
            console.log('Read article');
            // window.location.href = '/article.html';
        });
    }
});

// Mobile navigation (if needed in future)
// Add hamburger menu functionality here

console.log('Bhor Blog loaded successfully! ✨');
