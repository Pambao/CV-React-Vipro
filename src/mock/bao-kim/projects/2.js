import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";
import germany from "@/assets/images/lecture-germany.jpg";

export default {
    name: "Games simulating on Minecraft",
    client: "School subject",
    role: "Developer",
    date: new Date(2018, 1),
    tags: ["python", "backend"],
    contents: [
        {
            component: "ProjectDescription",
            title: "GOAL & TEAM STRUCTURE",
            col1: `Propose a full solution for a E-bike booking application`,
            col2: `Team of 4, including 2 Vietnamese, and 2 from other countries`
        },
        {
            component: "ProjectDescription",
            title: "EXPERIENCE",
            col1: `This is also one of the unforgettable projects during my university period. 
            For this project, our goal is to propose a fully functional architecture for a bike booking application (like E-scooter in European countries). This was memorable because this is the first time I had a chance to work with other members outside Vietnam. This project was a part of a subject in our University, to get all of the students the idea of how a project is proposed, let us have an opportunity to think about the overall architecture, and to get us a brief idea what is Agile/Scrum is and how it is operated.
            `,
        },
        {
            component: "ImageWithTitle",
            src1: germany,
            description1: "A lecture in Frankfurt UAS",
        },
    ],
    card1: {
        title: "Credit",
        detail: "FEATURING BAO DANG KIM, BAO PHAM, NGO MINH THONG, TRUONG MINH HIEU.",
    },
};
