class SalesPerson extends Worker {
    constructor(fullname = "", email = "", department = "sales", projects = [], 
    skills =  ['Communication', 'Teamwork', 'Adaptability', 'Work Ethic', 'Time Management'], 
    bonus = 100) {
        super(fullname, email, department, projects, skills);
        this.bonus = bonus;
    }

    setProjects(projects) {
        this.projects = projects;
        this.projects.forEach(project => {
            this.bonus += getBonusByProject(project);
        })
    }

    addProject(project) {
        this.projects.push(project);
        this.bonus += getBonusByProject(project);
    }
}