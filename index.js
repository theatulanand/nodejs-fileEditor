const fs = require('fs');

const dirPath = "./file-repo";

const arg = process.argv.slice(2);


//Sync Method - Blocking Code 

switch (arg[0]) {
    case "read":
        if (arg.length < 2) {
            console.log("Invalid Arguments , Please provide file name");
            break;
        }

        const filePath = dirPath + "/" + arg[1];
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, { encoding: "utf8" });
            console.log(content);
        } else {
            console.log(filePath + " not found");
        }
        break;

    case "append":
        if (arg.length < 3) {
            console.log("Invalid Arguments");
            break;
        }

        if (fs.existsSync(dirPath + "/" + arg[2])) {
            const content = fs.appendFileSync(dirPath + "/" + arg[2], arg[1]);
            console.log(arg[2] + ' updated');
        } else {
            console.log(dirPath + "/" + arg[2] + " not found");
        }
        break;

    case "delete":
        if (arg.length < 2) {
            console.log("Invalid arguments please provide file name");
            break;
        }
        if (fs.existsSync(dirPath + "/" + arg[1])) {
            fs.unlinkSync(dirPath + "/" + arg[1]);
            console.log(arg[1] + " deleted");
        } else {
            console.log(dirPath + "/" + arg[1] + " not found");
        }
        break;
    case "create":
        if (fs.existsSync(dirPath + "/" + arg[1])) {
            console.log(arg[1] + " already exist");
            break;
        } else {
            if (arg.length == 3) {
                fs.writeFileSync(dirPath + "/" + arg[1], arg[2]);
                console.log(arg[1] + " created");
            } else {
                console.log("Invalid Arguments");
            }
        }
        break;

    case "rename":
        if (arg.length < 3) {
            console.log("Invalid Arguments");
            break;
        }

        if (fs.existsSync(dirPath + "/" + arg[1])) {
            fs.renameSync(dirPath + "/" + arg[1], dirPath + "/" + arg[2]);
            console.log("file " + arg[1] + " renamed to " + arg[2]);
        } else {
            console.log(arg[1] + " not found");
        }

        break;

    case "list":
        if (arg.length < 2) {
            console.log('Invalid Arguments, please provide directory');
            break;
        } else {
            const files = fs.readdirSync(arg[1], { encoding: 'utf8' });
            console.log(files);
        }

        break;
    default:
        break;
}

