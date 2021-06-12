import Worker from './Worker.js'

class Developer extends Worker {
    constructor(
        fullname = "",
        email = "",
        department = "software engineering",
        projects = [],
        skills = ["Communication", "Teamwork", "Adaptability", "Work Ethic", "Time Management"]
    ) {
        super(fullname, email, department, projects, skills);
    }
}

export default Developer;