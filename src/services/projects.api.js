import axios from "axios";

class ProjectsAPIService {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL;
  }
  getALLProjects() {
    return axios.get(`${this.baseURL}/api/projects`, {
      headers: {
        Authorization: `Bearer ${this.authToken}`,
      },
    });
  }
}

export default ProjectsAPIService;
