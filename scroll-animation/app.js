//  it observes multiple elements or entries at the same time
//  it will run when the visibility of one of the elements changes
//  Conditional chat: when entry is intersecting the view port add a class (it will make it visible)
//  for multiple times animation: if not intersecting, remove the class
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
        } else {
            entry.target.classList.remove('show');
        }
    });
});
//  grab all the element of the class
const hiddenElements = document.querySelectorAll('.hidden');

//  what should observe: in this demo it observes all hidden elements
hiddenElements.forEach((el) => observer.observe(el));