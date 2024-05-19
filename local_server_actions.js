const { conn, Activity, Admin, Exercise, Routine, User, user_activities, Option } = require("./src/db.js");
const argon2 = require("argon2");

async function createAdmins(){
  Admin.findAndCountAll({ limit:2, offset:0 })
  .then(async actis=>{
    if(!actis.rows.length){
      const admins = [
        { email:"superadmin@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"JUAN ANDRÉS", last_name:"MACRI IBAÑEZ", identity:12345678, super_admin:true },
        { email:"amacri162013@yahoo.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"MARTÍN", last_name:"GARCÍA", identity:23456789  },
        { email:"admin2@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"PEDRO", last_name:"SORBAN", identity:34567890 },
        { email:"admin3@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"MATÍAS", last_name:"MENDEZ", identity:98765432 },
        { email:"admin4@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"JOSÉ", last_name:"MARTÍNEZ", identity:87654321 },
        { email:"admin5@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"FRANCISCO", last_name:"MELMAN", identity:10293847 },
        { email:"admin6@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"ADRIÁN JOAQUÍN", last_name:"RODRÍGUEZ", identity:47382910 },
        { email:"admin7@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"FELIPE", last_name:"GONZÁLEZ", identity:90807060 },
        { email:"admin8@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"CRISTÓBAL", last_name:"FERNÁNDEZ", identity:12131415 },
        { email:"admin9@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"JESÚS", last_name:"LÓPEZ", identity:25345346 },
        { email:"admin10@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"DAMIÁN", last_name:"MARTÍNEZ", identity:36457654 },
        { email:"admin11@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"JOAQUÍN DANIEL", last_name:"SÁNCHEZ", identity:85145896 },
        { email:"admin12@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"HÉCTOR", last_name:"PÉREZ", identity:23456780 }
      ];
      for await (const admin of admins) {
        Admin.create( admin ).then(newAdmin=>{ return newAdmin; }).catch(err=>{ throw new Error(err) });
      };
    };
  });
};

async function createActivities(){
  Activity.findAndCountAll({ limit:2, offset:0 })
  .then(async actis=>{
    if(!actis.rows.length){
      const activities = [
        {name:'latin rithms', day:'Monday', start_time:"10:40", end_time:"11:40", instructor:'lola', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'dance'},
        {name:'funcional', day:'Monday', start_time:"16:15", end_time:"17:15", instructor:'kuky', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'spot training', day:'Monday', start_time:"18:00", end_time:"19:00", instructor:'chris', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'indoor bike', day:'Tuesday', start_time:"10:40", end_time:"11:40", instructor:'john', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'sport'},
        {name:'zumba', day:'Tuesday', start_time:"16:15", end_time:"17:15", instructor:'andy', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'dance'},
        {name:'boxing', day:'Tuesday', start_time:"18:00", end_time:"19:00", instructor:'leo', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'dance'},
        {name:'footbal', day:'Wednesday', start_time:"10:40", end_time:"11:40", instructor:'george', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'sport'},
        {name:'indoor running', day:'Wednesday', start_time:"16:15", end_time:"17:15", instructor:'oliver', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'sport'},
        {name:'power lifting', day:'Wednesday', start_time:"18:00", end_time:"19:00", instructor:'rob', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'olimpic lifting', day:'Thursday', start_time:"10:40", end_time:"11:40", instructor:'willy', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'joga', day:'Thursday', start_time:"16:15", end_time:"17:15", instructor:'lily', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'obstacle run', day:'Thursday', start_time:"18:00", end_time:"19:00", instructor:'steve', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'twerking', day:'Friday', start_time:"10:40", end_time:"11:40", instructor:'mia', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'dance'},
        {name:'taekwondo', day:'Friday', start_time:"16:15", end_time:"17:15", instructor:'alice', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'fight'},
        {name:'mixed martial arts', day:'Friday', start_time:"18:00", end_time:"19:00", instructor:'james', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'fight'},
        {name:'pilates', day:'Saturday', start_time:"10:40", end_time:"11:40", instructor:'michael', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'crossfit', day:'Saturday', start_time:"16:15", end_time:"17:15", instructor:'thom', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'},
        {name:'calisthenics', day:'Saturday', start_time:"18:00", end_time:"19:00", instructor:'eli', description:'Circuito de ejercisios tipo aeróbico con peso ligero', tag:'muscle training'}
      ];
      for await (const activity of activities) {
        Activity.create( activity ).catch(err=>{ throw new Error(err) }).then(newActy=>{ return newActy; });
      };
    };
  });
};

async function createExercises(){
  Exercise.findAndCountAll({ limit:2, offset:0 })
  .then(async actis=>{
    if(!actis.rows.length){
      const exercises = [
        { name:"bicep curl", muscle:"bicep", body_part:"arm", video:"video example 1" },
        { name:"hipthrust", muscle:"glute", body_part:"leg", video:"video example 2" },
        { name:"squat", muscle:"muscle", body_part:"lower back", video:"video example 3" },
        { name:"abdominals", muscle:"abdominal", body_part:"belly", video:"video example 4" },
        { name:"bench press", muscle:"pactoral", body_part:"chest", video:"video example 5" },
        { name:"wrist curl", muscle:"wrist flexors", body_part:"forearm", video:"video example 6" },
        { name:"pull-up", muscle:"dorsal", body_part:"higher back", video:"video example 7" },
        { name:"hamstring curl", muscle:"hamstring", body_part:"leg", video:"video example 8" },
        { name:"overhead Tricep Extension", muscle:"tricep", body_part:"arm", video:"video example 9" },
        { name:"lateral rise", muscle:"deltoid", body_part:"shoulder", video:"video example 10" },
        { name:"barbell Shrug", muscle:"traps", body_part:"higher back", video:"video example 11" }
      ];
      for await(const exercise of exercises) {
        Exercise.create( exercise ).then(newExr=>{ return newExr; }).catch(err=>{ throw new Error(err) });
      };
    };
  });
};

async function createUsers(){
  User.findAndCountAll({ limit:2, offset:0 })
  .then(async actis=>{
    if(!actis.rows.length){
      const users = [
        {email:"client@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"LIAM", last_name:"MELMAN", identity:76589107, nickname:"martilman", sex:'male', age:35, isTrainer:false, routine:[
          { name:"leg day", day:1, description:"" },
          { name:"chest day", day:2, description:"" }
        ]},
        {email:"client2@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"NOAH", last_name:"MACRI ", identity:91763460, nickname:"macrijuan", sex:'male', age:34, isTrainer:false},
        {email:"client3@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"OLIVER", last_name:"IBAÑEZ", identity:39522622, nickname:"martilman", sex:'male', age:35, isTrainer:false, routines:[
          { name:"back day", day:3,  },
          { name:"monday", day:4, description:"" }
        ]},
        {email:"client4@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"JAMES", last_name:"SMITH", identity:45715113, nickname:"macrijuan", sex:'male', age:23, isTrainer:false},
        {email:"client5@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"ELIJAH", last_name:"JONES", identity:96202229, nickname:"martilman", sex:'male', age:35, isTrainer:false, routines:[
          { name:"wednesday", day:5, description:"" },
          { name:"fullbody", day:6, description:"" },
          { name:"body breaker", day:1, description:"" },
          { name:"go stronger", day:2, description:"" }
        ]},
        {email:"client6@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"WILLIAM", last_name:"WILLIAMS", identity:26167783, nickname:"macrijuan", sex:'male', age:23, isTrainer:false},
        {email:"client7@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"HENRY", last_name:"BROWN", identity:80011068, nickname:"macrijuan", sex:'male', age:75, isTrainer:false},
        {email:"client8@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"LUCAS", last_name:"MURPHY", identity:84175114, nickname:"macrijuan", sex:'male', age:26, isTrainer:false, routines:[
          { name:"better legs", day:3, description:"" },
          { name:"superman torso", day:4, tag:["superman fisic", "strong torso", "torso", "good looking"] },
          { name:"leg day", day:5, description:"" },
          { name:"chest day", day:6, description:"" }
        ]},
        {email:"client9@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"BENJAMIN", last_name:"KELLY", identity:19108454, nickname:"macrijuan", sex:'male', age:25, isTrainer:false},
        {email:"client10@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"THEODORE", last_name:"SULLIVAN", identity:85536181, nickname:"macrijuan", sex:'male', age:54, isTrainer:false, routines:[
          { name:"pumped arms", day:1, description:"" },
          { name:"leg n arms", day:2, description:"" }
        ]},
        {email:"client11@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"OLIVIA", last_name:"WALSH", identity:18167404, nickname:"macrijuan", sex:'male', age:24, isTrainer:false},
        {email:"client12@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"EMMA", last_name:"ANDERSON", identity:52849738, nickname:"macrijuan", sex:'male', age:23, isTrainer:false, routines:[
          { name:"cardio day", day:3, description:"" },
          { name:"running session", day:4, description:"" },
          { name:"powerlifting", day:5, description:"" },
          { name:"functional", day:6, description:"" }
        ]},
        {email:"client13@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"AMELIA", last_name:"TAYLOR", identity:94247600, nickname:"macrijuan", sex:'male', age:41, isTrainer:false},
        {email:"client14@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"SOPHIA", last_name:"JONES", identity:52000349, nickname:"macrijuan", sex:'male', age:13, isTrainer:false, routines:[
          { name:"elasticgirl body", day:6, description:"" },
          { name:"spot training", day:6, description:"" }
        ]},
        {email:"client15@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"ISABELLA", last_name:"WILSON", identity:59347722, nickname:"macrijuan", sex:'male', age:42, isTrainer:false},
        {email:"client16@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"AVA", last_name:"JOHNSON", identity:55759440, nickname:"macrijuan", sex:'male', age:65, isTrainer:false, routines:[
          { name:"leg day", day:1, description:"" },
          { name:"chest day", day:2, description:"" },
          { name:"back day", day:3,  }
        ]},
        {email:"client17@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"MIA", last_name:"DAVIS", identity:65367514, nickname:"macrijuan", sex:'male', age:35, isTrainer:false},
        {email:"client18@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"EVELYN", last_name:"WHITE", identity:13142464, nickname:"macrijuan", sex:'male', age:23, isTrainer:false, routines:[
          { name:"superman torso", day:4, tag:["superman fisic", "strong torso", "torso", "good looking"] },
          { name:"leg day", day:5, description:"" },
          { name:"chest day", day:6, description:"" }
        ]},
        {email:"client19@example.com", password:await argon2.hash("Password1!",{ type:argon2.argon2i }).then(str=>str.slice(30,str.length)), first_name:"LUNA", last_name:"MILLER", identity:94054331, nickname:"macrijuan", sex:'male', age:16, isTrainer:false}
      ];
      for await(const user of users) {
        User.create( user )
        .then(async newUser=>{
          if(user.routines){
            for await(const routine of user.routines){
              Routine.create( routine )
              .then(rutn=>{
                newUser.addRoutine(rutn)
                .then(_rutn=>{ 
                  console.log("Rutine '"+routine.name+"' added to User "+newUser.email)
                 }).catch(err=>{ console.log(err); throw new Error(err); });
              }).catch(err=>{ console.log(err); throw new Error(err); })
            };
          };
        }).catch(err=>{ console.log(err); throw new Error(err) })
      };
      user_activities.bulkCreate([
        { activityId:1, userId:1 },
        { activityId:2, userId:2 },
        { activityId:3, userId:3 },
        { activityId:4, userId:1 },
        { activityId:5, userId:2 },
        { activityId:6, userId:3 },
        { activityId:7, userId:1 },
        { activityId:8, userId:2 },
        { activityId:9, userId:3 },
        { activityId:10, userId:1 },
        { activityId:11, userId:2 },
        { activityId:12, userId:3 }
      ]).then(data=>data).catch(err=>{ console.log(err); throw new Error(err) });
    };
  });
};

async function createOptions(){
  Option.bulkCreate([
    {
      "model":"Activity",
      "fields": {
        "id": {
          "type": "str_input",
          "data": "",
          "not_custom": true
        },
        "name": {
          "type": "str_input",
          "data": ""
        },
        "day": {
          "type": "select",
          "data": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        },
        "start_time": {
          "type": "time_select",
          "data": "06:00"
        },
        "end_time": {
          "type": "time_select",
          "data": "06:00"
        },
        "instructor": {
          "type": "str_input",
          "data": ""
        },
        "description": {
          "type": "str_input",
          "data": ""
        },
        "tag": {
          "type": "select",
          "data": [
            "sport",
            "muscle training",
            "dance",
            "fight"
          ]
        }
      },
      "isRemovable":true
    },
    {
      "model":"Admin",
			"fields": {
        "first_name": {
          "type": "str_input",
          "data": ""
        },
        "last_name": {
          "type": "str_input",
          "data": ""
        },
        "identity": {
          "type": "str_input",
          "data": ""
        },
        "super_admin": {
          "type": "select",
          "data": [
            "false",
            "true"
          ]
        }
      },
			"isRemovable":true
    }
  ])
};

module.exports = async function reFillDB(active){
  if(active){
    createAdmins().then(()=>{console.log("Table admins restarted")});
    createActivities().then(()=>{console.log("Table activities restarted")});
    createExercises().then(()=>{console.log("Table exercises restarted")});
    createUsers().then(()=>{console.log("Table users restarted")});
    createOptions().then(()=>{console.log("Table options restarted")});
  };
};

// async function createRoutines(){
//   Routine.findAndCountAll({ limit:2, offset:0 })
//   .then(async actis=>{
//     if(!actis.rows.length){
//       const routines = [
//         { name:"leg day", day:1, description:"" },
//         { name:"chest day", day:2, description:"" },
//         { name:"back day", day:3,  },
//         { name:"monday", day:4, description:"" },
//         { name:"wednesday", day:5, description:"" },
//         { name:"fullbody", day:6, description:"" },
//         { name:"body breaker", day:1, description:"" },
//         { name:"go stronger", day:2, description:"" },
//         { name:"better legs", day:3, description:"" },
//         { name:"superman torso", day:4, tag:["superman fisic", "strong torso", "torso", "good looking"] },
//         { name:"leg day", day:5, description:"" },
//         { name:"chest day", day:6, description:"" },
//         { name:"pumped arms", day:1, description:"" },
//         { name:"leg n arms", day:2, description:"" },
//         { name:"cardio day", day:3, description:"" },
//         { name:"running session", day:4, description:"" },
//         { name:"powerlifting", day:5, description:"" },
//         { name:"functional", day:6, description:"" },
//         { name:"elasticgirl body", day:6, description:"" },
//         { name:"spot training", day:6, description:"" }
//       ];
//       for await(const routine of routines) {
//         Routine.create( routine ).then(newRutn=>{ return newRutn; }).catch(err=>{ throw new Error(err) });
//       };
//     };
//   });
// };