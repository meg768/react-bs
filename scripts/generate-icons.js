var path = require('path');
var Path = require('path');
var fs = require('fs');


class Component {

    getBootstrapIconPath() {
        return Path.join(__dirname, '../node_modules/bootstrap-icons/icons');
    }

    getBootifyIconsPath() {
        return Path.join(__dirname, '../icons');        
    }


    emptyFolder(path) {
        fs.readdirSync(path).forEach((file) => {
            const fileName = Path.join(path, file);
            if (fs.lstatSync(fileName).isDirectory()) {
                this.emptyFolder(fileName);
                fs.rmdirSync(fileName);
            } 
            else {
                fs.unlinkSync(fileName);
            }
        });
    }


    generateIcons(src, dst) {
        this.emptyFolder(dst);

        fs.readdirSync(src).forEach((icon) => {
            var parts = Path.parse(Path.join(src, icon));
            var fileName = Path.join(dst, parts.name + '.js');
            fs.writeFileSync(fileName, `export default require("bootstrap-icons/icons/${icon}");`);
        });
    }
 
    run() {
        this.generateIcons(this.getBootstrapIconPath(), this.getBootifyIconsPath());
    }
    
}

var component = new Component();
component.run();

