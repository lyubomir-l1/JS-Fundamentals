function extractFile(string){
    let directories = string.split("\\");
    let fileName = directories.pop();
    let lastPoint = fileName.lastIndexOf(".");
    let name = fileName.substring(0, lastPoint);
    let extension = fileName.substring(lastPoint+1, fileName.length);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
    }