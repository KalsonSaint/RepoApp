class UI {
  constructor() {
    this.displayRepo = document.querySelector("#displayRepo");
  }

  // display Repo
  showRepo(repo) {
    let output = "";
    repo.forEach(repo => {
      output += `
                <div class="container"> 
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <img src="${repo.owner.avatar_url}" alt="" class="circle">
                            <a href="${repo.html_url} target="_blank"><span class="title">${repo.name}</span></a>
                            <p>${repo.description}</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">grade</i>${repo.stargazers_count}</a>
                            <div id="marginTop" class="row>
                                <div class="col s1"><span class="new badge">${repo.language}</span></div>
                                <div class="col s6"><span class="badge">Updated: ${repo.updated_at}</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
    });
    document.querySelector("#displayRepo").innerHTML = output;
  }

  clearProfile() {
    this.displayRepo.innerHTML = "";
  }
}
