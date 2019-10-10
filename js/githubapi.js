class GithubAPI{
    constructor(){
        this.clientID = 'ce37ac0d270a567ff58c';
        this.client_secret = 'd8960030105db5846b626d6f15140cf46f92b236';
        this.repo_count = 5;
    }

    async getRepo(userText){
        const repoRes = await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id=${this.clientID}&client_secret=${this.client_secret}&per_page=${this.repo_count}`);
        
        const repo = await repoRes.json();
        
    }
}