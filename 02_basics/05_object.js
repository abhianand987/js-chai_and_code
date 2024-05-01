// Destructering of objects

const course = {
    courseName : 'JS in Hindi' ,
    price : 999 ,
    courseInstructor : 'abhishek'
}

//course.courseInstructor

const {} = course; // const curly braces = phir kha se values extract krni hai --> from course object , curly braces
//ke andar kon se attribute se uthani hai

const {courseInstructor : instructor} = course

//iske bad ab course.courseInstructor likne ka jrurat ni hai direct courseInstructor likh skte ho ya : dekr can give alias too

console.log(instructor);

//API --> Jb bhi aapko apna kaam kisi aur ke sar pe daal dena hai to usi ko API kehte hai JSON
// APIs kuch nahi hai aapko values aati hai backend se and aap usko kaise likhte hai , pahle xml form me aati thi and
// ab JSON form me and JSON --> object hi hai without any name
// JS me fetch method se url call and response me mjhe data mil jyga and now convert JSON to object and use it.

// API is an object jiska koi name nahi hai
// {
//     name : 'Abhishek' ,
//     courseName : 'js in hindi' , 
//     price : 'free'
// }

// API result : https://api.github.com/users/abhianand987
// {
//     "login": "abhianand987",
//     "id": 87860680,
//     "node_id": "MDQ6VXNlcjg3ODYwNjgw",
//     "avatar_url": "https://avatars.githubusercontent.com/u/87860680?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/abhianand987",
//     "html_url": "https://github.com/abhianand987",
//     "followers_url": "https://api.github.com/users/abhianand987/followers",
//     "following_url": "https://api.github.com/users/abhianand987/following{/other_user}",
//     "gists_url": "https://api.github.com/users/abhianand987/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/abhianand987/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/abhianand987/subscriptions",
//     "organizations_url": "https://api.github.com/users/abhianand987/orgs",
//     "repos_url": "https://api.github.com/users/abhianand987/repos",
//     "events_url": "https://api.github.com/users/abhianand987/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/abhianand987/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Abhishek Anand",
//     "company": "abhi.anand987@gmail.com",
//     "blog": "https://www.linkedin.com/in/abhianand987/",
//     "location": "Dhanbad",
//     "email": null,
//     "hireable": null,
//     "bio": "IIT Dhanbad '22 || Competitive Programmer || Machine Learning Enthusiasts",
//     "twitter_username": null,
//     "public_repos": 28,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 3,
//     "created_at": "2021-07-23T12:00:34Z",
//     "updated_at": "2024-05-01T10:12:22Z"
//     }




