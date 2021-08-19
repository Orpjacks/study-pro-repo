import aboutUs from './components/aboutUs';
import home from './components/home';
import Header from './components/Header';
import myCards from './components/myCards';
import HashTags from './components/hashTags';
import searchBy from './components/searchBy';
import signUp from './components/signUp';
import contactUs from './components/contactUs';
import crud from './crud/crud';
import flashCard from './components/flashCard';
import HashTagForm from './components/hashTagForm';
import StudentNameForm from './components/studentNameForm';


buildPage();


function buildPage() {
    
    header();
    my_Cards();
    searchByBtn();
    signup();
    about();
    contact();
    landHome();
    FlashCard();

}



function landHome() {
    const app = document.querySelector("#app");
       app.innerHTML = home();
}

function contact() {
    const app = document.querySelector("#app");
       app.innerHTML = contactUs();
}
function header() {
    const nav_header = document.querySelector("#header");
    nav_header.innerHTML = Header();
}

// function hashtags() {
//     const nav_hash = document.querySelector(".nav_hashtags");
//     nav_hash.addEventListener('click', () => {
//         const app = document.querySelector("#app");
//         crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
//             console.log(hashtags);
//             app.innerHTML = HashTags(hashtags)
//         });
//     });
// }

function searchByBtn() {
    const search_by = document.querySelector(".nav_search");
    search_by.addEventListener('click', () => {
        const app = document.querySelector("#app");
        app.innerHTML = searchBy(searchBy)
        wireUpHashtagSearch();
        wireUpStudentNameSearch();
        // crud.getRequest('http://localhost:8080/api/searchBy', searchBy => {
        //     console.log(searchBy);

        // })
    })
}

function wireUpHashtagSearch() {
    const nav_hash = document.querySelector(".searchByHashtag");
    nav_hash.addEventListener('click', () => {
       // const app = document.querySelector("#app");
       // crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
          //  console.log(hashtags);
           // app.innerHTML = HashTags(hashtags)
      //  });
      const form = document.querySelector('.form');
      form.innerHTML =  HashTagForm();
     
    });
}
function wireUpStudentNameSearch() {
    const nav_student = document.querySelector(".searchByStudentName");
    nav_student.addEventListener('click', () => {
       // const app = document.querySelector("#app");
       // crud.getRequest('http://localhost:8080/api/hashtags', hashtags => {
          //  console.log(hashtags);
           // app.innerHTML = HashTags(hashtags)
      //  });
     const form = document.querySelector('.form');
     form.innerHTML = StudentNameForm();
    });
}

function signup() {
    const signup = document.querySelector(".nav_sign");
    signup.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = signUp();
    })
}
function my_Cards(){
    const card = document.querySelector(".nav_myCards");
        card.addEventListener('click', () => {
            const app = document.querySelector("#app");
            crud.getRequest('http://localhost:8080/api/flashCards', Cards => {
                console.log(Cards);
                app.innerHTML = myCards(Cards);
                bind_links();
            })
        })
}
function bind_links(){
    let links = document.querySelectorAll(".tag-list-title");
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            if(event.target.classList.contains("tag-list-title")){
               let id= event.target.parentElement.querySelector(".tag-list-id").value;
               crud.getRequest('http://localhost:8080/api/flashCards/'+id, Card => {
                console.log(Card);
                app.innerHTML = flashCard(Card);

            })
            }
        })
    })
}


function about() {
    const about_us = document.querySelector(".nav_about");
    about_us.addEventListener("click", () => {
        const app = document.querySelector("#app");
        app.innerHTML = aboutUs();
    })

}

function contact() {
    const contact_us = document.querySelector(".nav_contact");
        contact_us.addEventListener("click", () => {
            const app = document.querySelector("#app");
            app.innerHTML = contactUs();
        })
}

function FlashCard() {
    const card = document.querySelector(".nav_home");
    card.addEventListener("click", () => {

        const app = document.querySelector("#app");
        crud.getRequest(`http://localhost:8080/api/flashCards/4`, currentCard => {
            console.log(currentCard);
            app.innerHTML = flashCard(currentCard)
        })
    })

}
