import Worker from './Worker.js'

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
            this.bonus += this.getBonusByProject(project);
        })
    }

    addProject(project) {
        this.projects.push(project);
        this.bonus += this.getBonusByProject(project);
    }

    getBonusByProject(project) {
        let bonusByProject = [
            { project: "Video Compensation", bonus: 1000 },
            { project: "Artificial Intelligence", bonus: 2500 },
            { project: "Virtual Reality", bonus: 2000 },
            { project: "Satellite Wi-Fi", bonus: 2300 },
            { project: "Mentorship Platform", bonus: 500 },
        ];
        let data = bonusByProject.filter((obj) => obj.project === project).shift();
        if (typeof data !== "undefined") {
            return data.bonus;
        }
        return 0;
    }
}

export default SalesPerson;