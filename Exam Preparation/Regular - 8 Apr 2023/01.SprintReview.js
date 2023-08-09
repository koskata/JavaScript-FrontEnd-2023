function solve(arr) {
    let n = Number(arr.shift());

    let length = arr.length - n;
    let assignees = {};

    for (let i = 0; i < n; i++) {
        let curr = arr[0].split(":");

        if (!assignees.hasOwnProperty(curr[0])) {
            assignees[curr[0]] = [];
        }

        assignees[curr[0]].push({taskID: curr[1], title: curr[2], status: curr[3], estimatedPoints: Number(curr[4])});

        arr.shift();
        //console.log(curr);
    }


    for (let i = 0; i < length; i++) {
        let curr = arr[0].split(":");

        let command = curr[0];

        if (command === "Add New") {
            if (!assignees.hasOwnProperty(curr[1])) {
                console.log(`Assignee ${curr[1]} does not exist on the board!`);
            }
            else {
                assignees[curr[1]].push({taskID: curr[2], title: curr[3], status: curr[4], estimatedPoints: Number(curr[5])});
            }
        }
        else if (command === "Change Status") {
            if (!assignees.hasOwnProperty(curr[1])) {
                console.log(`Assignee ${curr[1]} does not exist on the board!`);
            }
            else if (assignees[curr[1]].some(x => x.taskID !== curr[2])) {
                console.log(`Task with ID ${curr[2]} does not exist for ${curr[1]}!`);
            }
            else {
                let task = assignees[curr[1]].find(x => x.taskID === curr[2])
                task.status = curr[3];
            }
        }
        else if (command === "Remove Task") {
            if (!assignees.hasOwnProperty(curr[1])) {
                console.log(`Assignee ${curr[1]} does not exist on the board!`);
            }
            else if (Number(curr[2]) < 0 || Number(curr[2]) >= assignees[curr[1]].length) {
                console.log(`Index is out of range!`);
            }
            else {
                assignees[curr[1]].splice(Number(curr[2]), 1);
            }
        }


        arr.shift();
    }

    let todo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let done = 0;

    Object.values(assignees).forEach(tasks => {
        for (const task of tasks) {
            if (task.status === "ToDo") {
                todo += task.estimatedPoints;
            }
            else if (task.status === "In Progress") {
                inProgress += task.estimatedPoints;
            }
            else if (task.status === "Code Review") {
                codeReview += task.estimatedPoints;
            }
            else if (task.status === "Done") {
                done += task.estimatedPoints;
            }
        }
    });

    let pointsWithoutDone = todo + inProgress + codeReview;

    console.log(`ToDo: ${todo}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);


    if (done >= pointsWithoutDone) {
        console.log(`Sprint was successful!`);
    }
    else {
        console.log(`Sprint was unsuccessful...`);
    }
    //console.log(n);
}

solve([
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
);