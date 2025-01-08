document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll('.category');
    const allCategory = document.getElementById('allCategory');
    const jurisdictionLinks = document.querySelectorAll('.jurisdiction');
    const allJurisdiction = document.getElementById('allJurisdiction');
    const lawyersDiv = document.querySelector('.lawyers');
  
    const lawyersData = [
      {id : 1,  name: 'Aarav Patel', categories: ['Defense', 'Taxation'], jurisdiction: 'Delhi', image: './Images/1.png' },
      {id : 2,  name: 'Ananya Gupta', categories: ['Family', 'Corporate'], jurisdiction: 'Mumbai', image: './Images/jane.jpg' },
      {id : 3,  name: 'Rohan Kumar', categories: ['Civil Litigation', 'Constitutional'], jurisdiction: 'Chennai', image: './Images/robert.jpg' },
      {id : 4,  name: 'Sneha Singh', categories: ['Criminal', 'Cyber'], jurisdiction: 'Bangalore', image: './Images/emily.jpg' },
      {id : 5,  name: 'Sanjay Sharma', categories: ['Family', 'Corporate'], jurisdiction: 'Hyderabad', image: './Images/micheal.jpg' },
      {id : 6,  name: 'Aaradhya Yadav', categories: ['Defense', 'Taxation'], jurisdiction: 'Kolkata', image: './Images/sophie.jpg' },
      {id : 7,  name: 'Arjun Mishra', categories: ['Constitutional', 'Civil Litigation'], jurisdiction: 'Varanasi', image: './Images/david.jpg' },
      {id : 8,  name: 'Anushka Patel', categories: ['Cyber', 'Criminal'], jurisdiction: 'Ahmedabad', image: './Images/olivia.jpg' },
      {id : 9,  name: 'Aryan Gupta', categories: ['Corporate', 'Taxation'], jurisdiction: 'Delhi', image: './Images/william.jpg' },
      {id : 10,  name: 'Ishaniya Malhotra', categories: ['Defense', 'Civil Litigation'], jurisdiction: 'Mumbai', image: './Images/ella.jpg' },
  ];
  
  
  function displayLawyers(selectedCategories, selectedJurisdiction) {
    lawyersDiv.innerHTML = '';
    lawyersData.forEach(lawyer => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes('All') || lawyer.categories.some(category => selectedCategories.includes(category));
      const jurisdictionMatch = selectedJurisdiction === 'All' || lawyer.jurisdiction === selectedJurisdiction;
  
      if (categoryMatch && jurisdictionMatch) {
        const lawyerDiv = document.createElement('div');
        lawyerDiv.classList.add('lawyer');
        lawyerDiv.innerHTML = `
          <a href="../Profile/Profile/lawProfile.html?id=${lawyer.id}">
            <img src="${lawyer.image}" alt="${lawyer.name}">
            <p>${lawyer.name}</p>
            <p>${lawyer.categories.join(', ')}</p>
            <p>${lawyer.jurisdiction}</p>
          </a>
        `;
  
        lawyerDiv.addEventListener('click', function () {
          window.location.href = `../Profile/Profile/lawProfile.html?id=${lawyer.id}`;
        });
  
        lawyersDiv.appendChild(lawyerDiv);
      }
    });
  }
  
    displayLawyers(['All'], 'All');
  
    categoryLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const clickedCategory = e.target.textContent;
        allCategory.classList.remove('active');
        if (clickedCategory === 'All') {
          categoryLinks.forEach(cat => cat.classList.remove('active'));
          allCategory.classList.add('active');
          displayLawyers(['All'], allJurisdiction.textContent);
        } else {
          allCategory.classList.remove('active');
          link.classList.toggle('active');
          const selectedCategories = Array.from(document.querySelectorAll('.category.active')).map(cat => cat.textContent);
          displayLawyers(selectedCategories, allJurisdiction.textContent);
        }
      });
    });
  
    jurisdictionLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const clickedJurisdiction = e.target.textContent;
        allJurisdiction.classList.remove('active');
        if (clickedJurisdiction === 'All') {
          jurisdictionLinks.forEach(juris => juris.classList.remove('active'));
          allJurisdiction.classList.add('active');
          displayLawyers(Array.from(document.querySelectorAll('.category.active')).map(cat => cat.textContent), 'All');
        } else {
          allJurisdiction.classList.remove('active');
          jurisdictionLinks.forEach(juris => juris !== link ? juris.classList.remove('active') : null);
          link.classList.add('active');
          const selectedJurisdiction = Array.from(document.querySelectorAll('.jurisdiction.active')).map(juris => juris.textContent)[0];
          displayLawyers(Array.from(document.querySelectorAll('.category.active')).map(cat => cat.textContent), selectedJurisdiction);
        }
      });
    });
  });