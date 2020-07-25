// Creating a class that fetchs github user data
class Github {
  constructor() {
    // Oauth for more than 100 queries an hr to github
    this.client_id = "750a16c74e47bee62d88";
    this.client_secret = "224995a4c9bcb1177faa8defc08d7d574f46dae6";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  // Asynchronous method to fetch github user data
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${(this,
      this.repos_count)}&sort=${this.repos_sort}&client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    // Sets profile equal to api repsonse and turned into a json object
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
