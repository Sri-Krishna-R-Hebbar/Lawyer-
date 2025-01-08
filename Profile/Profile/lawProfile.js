document.addEventListener("DOMContentLoaded", function () {
    // Function to extract lawyer ID from URL
    function getLawyerIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const lawyerId = urlParams.get('id');
        return lawyerId;
    }

    function getLawyerDetailsById(lawyerId) {
        const lawyers = [
            { 
                id: 1, 
                name: 'Aarav Patel', 
                categories: ['Defense', 'Taxation'], 
                jurisdiction: 'New-Delhi', 
                image: '../../Lawyer Filter/Images/1.png', 
                state: 'Delhi', 
                dob: '28-02-1970', 
                experience: 30, 
                barristerId: 'BID2077DL', 
                casesHandled: 200, 
                email: 'aarav.patel@gmail.com', 
                phone: "9741238565", 
                successRate: 95, 
                reviews: [
                    { customerId: 1, reviewText: 'Aarav Patel is an exceptional lawyer with a deep understanding of defense and taxation laws. His commitment to his clients and his ability to navigate complex legal issues make him highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Aarav Patel on a taxation case. He is very knowledgeable and professional, providing clear guidance and excellent service throughout the process.' },
                    { customerId: 3, reviewText: 'I highly recommend Aarav Patel. His attention to detail and effective communication skills stood out during my defense case. He successfully handled every aspect, ensuring a positive outcome.' }
                ] 
            },
            { 
                id: 2, 
                name: 'Ananya Gupta', 
                categories: ['Family', 'Corporate'], 
                jurisdiction: 'Mumbai', 
                image: '../../Lawyer Filter/Images/jane.jpg', 
                state: 'Maharashtra', 
                dob: '15-05-1968', 
                experience: 35, 
                barristerId: 'BID2077MH', 
                casesHandled: 180, 
                email: 'ananya.gupta@gmail.com', 
                phone: "8657423556", 
                successRate: 67, 
                reviews: [
                    { customerId: 1, reviewText: 'Ananya Gupta provided exceptional legal assistance for my family law case. She showed great empathy and professionalism throughout the process, making a difficult situation much easier to handle.' },
                    { customerId: 2, reviewText: 'I am impressed by Ananya Gupta\'s expertise in corporate law. Her strategic advice and attention to detail were instrumental in resolving a complex corporate dispute efficiently.' },
                    { customerId: 3, reviewText: 'I highly recommend Ananya Gupta for her outstanding legal services. She provided clear guidance and expert representation, achieving a favorable outcome for my family\'s legal matters.' }
                ] 
            },
            { 
                id: 3, 
                name: 'Rohan Kumar', 
                categories: ['Civil Litigation', 'Constitutional'], 
                jurisdiction: 'Chennai', 
                image: '../../Lawyer Filter/Images/robert.jpg', 
                state: 'Tamil Nadu', 
                dob: '10-11-1965', 
                experience: 40, 
                barristerId: 'BID2077TN', 
                casesHandled: 250, 
                email: 'rohan.kumar@gmail.com', 
                phone: "6578123690", 
                successRate: 88, 
                reviews: [
                    { customerId: 1, reviewText: 'Rohan Kumar is an outstanding lawyer with deep expertise in civil litigation. His dedication and legal acumen played a crucial role in the success of my case.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Rohan Kumar on a constitutional matter. His attention to detail and commitment to justice are commendable. Highly recommended.' },
                    { customerId: 3, reviewText: 'I highly recommend Rohan Kumar for his exceptional legal services. He provided strategic guidance and effective representation, resulting in a favorable outcome for my case.' }
                ] 
            },
            
            { 
                id: 4, 
                name: 'Sneha Singh', 
                categories: ['Criminal', 'Cyber'], 
                jurisdiction: 'Bangalore', 
                image: '../../Lawyer Filter/Images/emily.jpg', 
                state: 'Karnataka', 
                dob: '20-07-1972', 
                experience: 25, 
                barristerId: 'BID2077KA', 
                casesHandled: 150, 
                email: 'sneha.singh@gmail.com', 
                phone: "8855669944", 
                successRate: 94, 
                reviews: [
                    { customerId: 1, reviewText: 'Sneha Singh is an excellent criminal lawyer. Her expertise in cyber law was invaluable in handling my case. I am grateful for her professionalism and dedication.' },
                    { customerId: 2, reviewText: 'I highly recommend Sneha Singh for her outstanding legal skills. She handled my cyber-related case with precision and kept me informed at every step.' },
                    { customerId: 3, reviewText: 'Sneha Singh is a top-notch lawyer with a deep understanding of criminal and cyber laws. Her commitment to her clients and legal expertise make her an excellent choice.' }
                ] 
            },
        
            { 
                id: 5, 
                name: 'Sanjay Sharma', 
                categories: ['Family', 'Corporate'], 
                jurisdiction: 'Hyderabad', 
                image: '../../Lawyer Filter/Images/micheal.jpg', 
                state: 'Telangana', 
                dob: '05-04-1969', 
                experience: 31, 
                barristerId: 'BID2077TG', 
                casesHandled: 220, 
                email: 'sanjay.sharma@gmail.com', 
                phone: "6179582301", 
                successRate: 78, 
                reviews: [
                    { customerId: 1, reviewText: 'Sanjay Sharma is an exceptional family and corporate lawyer. His ability to navigate complex legal issues and provide strategic advice is truly commendable.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Sanjay Sharma on a corporate matter. His professionalism and attention to detail were instrumental in achieving a positive outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Sanjay Sharma for his expertise in family and corporate law. He is dedicated, knowledgeable, and ensures the best possible outcome for his clients.' }
                ] 
            },
        
            { 
                id: 6, 
                name: 'Aaradhya Yadav', 
                categories: ['Defense', 'Taxation'], 
                jurisdiction: 'Kolkata', 
                image: '../../Lawyer Filter/Images/sophie.jpg', 
                state: 'West Bengal', 
                dob: '18-08-1966', 
                experience: 38, 
                barristerId: 'BID2077WB', 
                casesHandled: 190, 
                email: 'aaradhya.yadav@gmail.com', 
                phone: "8956741523", 
                successRate: 93, 
                reviews: [
                    { customerId: 1, reviewText: 'Aaradhya Yadav is an excellent lawyer with deep expertise in defense and taxation. Her dedication to her clients and ability to handle complex cases make her highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Aaradhya Yadav on a taxation matter. Her strategic advice and attention to detail were instrumental in achieving a favorable outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Aaradhya Yadav. Her legal expertise and effective communication skills were crucial in the success of my defense case. She is a top-notch lawyer.' }
                ] 
            },
        
            { 
                id: 7, 
                name: 'Arjun Mishra', 
                categories: ['Constitutional', 'Civil Litigation'], 
                jurisdiction: 'Varanasi', 
                image: '../../Lawyer Filter/Images/david.jpg', 
                state: 'Uttar Pradesh', 
                dob: '25-01-1975', 
                experience: 27, 
                barristerId: 'BID2077UP', 
                casesHandled: 170, 
                email: 'arjun.mishra@gmail.com', 
                phone: "9576482310", 
                successRate: 97, 
                reviews: [
                    { customerId: 1, reviewText: 'Arjun Mishra is an exceptional lawyer with deep expertise in constitutional and civil litigation. His commitment to justice and effective representation make him highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Arjun Mishra on a civil litigation matter. His legal acumen and attention to detail were crucial in achieving a positive outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Arjun Mishra for his outstanding legal services. He provided clear guidance and expert representation, ensuring success in my constitutional case.' }
                ] 
            },
        
            { 
                id: 8, 
                name: 'Anushka Patel', 
                categories: ['Cyber', 'Criminal'], 
                jurisdiction: 'Ahmedabad', 
                image: '../../Lawyer Filter/Images/olivia.jpg', 
                state: 'Gujarat', 
                dob: '30-06-1973', 
                experience: 29, 
                barristerId: 'BID2077GJ', 
                casesHandled: 210, 
                email: 'anushka.patel@gmail.com', 
                phone: "9620811562", 
                successRate: 96, 
                reviews: [
                    { customerId: 1, reviewText: 'Anushka Patel is an excellent cyber and criminal lawyer. Her dedication to her clients and legal expertise make her highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Anushka Patel on a cyber law matter. Her strategic advice and attention to detail were crucial in achieving a favorable outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Anushka Patel. Her professionalism and effective communication skills were instrumental in the success of my criminal case.' }
                ] 
            },
        
            { 
                id: 9, 
                name: 'Aryan Gupta', 
                categories: ['Corporate', 'Taxation'], 
                jurisdiction: 'Delhi', 
                image: '../../Lawyer Filter/Images/william.jpg', 
                state: 'Shahdara', 
                dob: '12-09-1963', 
                experience: 42, 
                barristerId: 'BID2077DL2', 
                casesHandled: 260, 
                email: 'aryan.gupta@gmail.com', 
                phone: "8955474745", 
                successRate: 89, 
                reviews: [
                    { customerId: 1, reviewText: 'Aryan Gupta is an exceptional corporate and taxation lawyer. His commitment to his clients and strategic advice make him highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Aryan Gupta on a corporate matter. His legal expertise and attention to detail were crucial in achieving a favorable outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Aryan Gupta. His professionalism and effective communication skills were instrumental in the success of my taxation case.' }
                ] 
            },
        
            { 
                id: 10, 
                name: 'Ishaniya Malhotra', 
                categories: ['Defense', 'Civil Litigation'], 
                jurisdiction: 'Mumbai', 
                image: '../../Lawyer Filter/Images/ella.jpg', 
                state: 'Maharashtra', 
                dob: '22-12-1967', 
                experience: 37, 
                barristerId: 'BID2077MH2', 
                casesHandled: 200, 
                email: 'ishaniya.malhotra@gmail.com', 
                phone: "9568569568", 
                successRate: 80, 
                reviews: [
                    { customerId: 1, reviewText: 'Ishaniya Malhotra is an outstanding defense and civil litigation lawyer. Her dedication to her clients and legal expertise make her highly recommended.' },
                    { customerId: 2, reviewText: 'I had the pleasure of working with Ishaniya Malhotra on a civil litigation matter. Her strategic advice and attention to detail were crucial in achieving a positive outcome.' },
                    { customerId: 3, reviewText: 'I highly recommend Ishaniya Malhotra for her exceptional legal services. She provided clear guidance and expert representation, ensuring success in my defense case.' }
                ] 
            },
        ];
        
          
        return lawyers.find(lawyer => lawyer.id === parseInt(lawyerId));
    }    
    

    function displayLawyerDetails(lawyerDetails) {
        document.getElementById('lawyer-name').textContent = lawyerDetails.name;
        document.getElementById('lawyer-pic').src = lawyerDetails.image;
        document.getElementById('area-of-jurisdiction').textContent = lawyerDetails.categories.join(', ');
        document.getElementById('lawyer-location').textContent = lawyerDetails.jurisdiction;
        document.getElementById('lawyer-state').textContent = lawyerDetails.state; 
        document.getElementById('dob').textContent = lawyerDetails.dob;
        document.getElementById('experience-years').textContent = lawyerDetails.experience;
        document.getElementById('barrister-id').textContent = lawyerDetails.barristerId;
        document.getElementById('cases-handled').textContent = lawyerDetails.casesHandled;
        document.getElementById('email').textContent = lawyerDetails.email;
        document.getElementById('phone').textContent = lawyerDetails.phone;
        document.getElementById('progress_rate').textContent = `${lawyerDetails.successRate} %`;
        document.getElementById('myBar').style.width = `${lawyerDetails.successRate}%`
        const feedbackLayout = document.querySelector('.feedback-layout');
        feedbackLayout.innerHTML = ''; 

        lawyerDetails.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('customer-review');
            reviewDiv.innerHTML = `<h4>Customer ${review.customerId}:</h4><p>${review.reviewText}</p>`;
            feedbackLayout.appendChild(reviewDiv);
        });
    }

    const lawyerId = getLawyerIdFromUrl();
    if (lawyerId) {
        const lawyerDetails = getLawyerDetailsById(lawyerId);
        if (lawyerDetails) {
            displayLawyerDetails(lawyerDetails);
        } else {
            console.error('Lawyer not found.');
        }
    } else {
        console.error('Lawyer ID not provided in the URL.'); 
    }
});
