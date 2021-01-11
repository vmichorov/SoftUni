function extractFile(directory) {
    let extIndex = directory.lastIndexOf(`.`);
    let extension = directory.slice(extIndex + 1);
    let fileIndex = directory.lastIndexOf(`\\`);
    let file = directory.slice(fileIndex + 1, extIndex);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');