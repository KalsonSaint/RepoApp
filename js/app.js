// init Github
const getRepo = new GithubAPI();
const ui = new UI();

// Search Repo
const searchRepo = document.querySelector(".searchGithub");

// Add EventListener
searchRepo.addEventListener('keyup', e => {
    const userText = e.target.value;
    if(userText !== ""){
        // Make http call to Github API 
        getRepo.getRepo(userText).then(data => {
            // display result
            ui.showRepo(data.repo);
        });
    } else{
        ui.clearProfile();
    }
})