const simpleGit = require('simple-git');

class GitHelper {

    static init(path) {
        const options = {
            baseDir: path,
            binary: 'git',
            maxConcurrentProcesses: 1
        };

        return simpleGit(options);
    }

    static commit(path, fileName) {
        const git = GitHelper.init(path);
         
        git.add(fileName);
        git.commit("Sync File");
        git.push();
    }
  
    static pull(path) {
        const git = GitHelper.init(path);

        git.pull();
    }
}
  
module.exports = GitHelper;
  