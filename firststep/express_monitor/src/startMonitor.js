const express = require('express')
const app = express()
const port = 3000

let logManager = {"logLevel": "debug"}

app.get('/', (req, res) => {
    let html = `<!doctype html>
<html>
<script>

document.addEventListener('DOMContentLoaded', function () {

    document.levelform.level.addEventListener('change', checkAuswahl);
 
    function checkAuswahl () {
        var menu = document.levelform.level;
        var level = menu.options[menu.selectedIndex].value;
        // console.log("level: " + level);
        
        var url = "/setdebuglevel/" + level
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        var text = xmlHttp.responseText;
        return text;
    }
});

</script>
   <h1>
   XHR POST to Server
   </h1>
   <body>
    <div>Das Wetter</div>
    <ul id="myList"></ul>

    <form name="levelform">
        <label><b>Debug-Level:</b>
        <select id="options1id" name="level" size="1">
           <option value="error">Error</option>
           <option value="warn">Warn</option>
           <option value="info">Info</option>
           <option value="debug">Debug</option>
        </select>
        </label>
        </form>

    </body>
    
   </body>
</html>`

    res.send(html)
})

debugger

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/setdebuglevel/:dlevel', (req, res) => {

    console.log("Debuglevel changed to: '" + req.params.dlevel + "'")
    logManager.logLevel = req.params.dlevel

    res.send("end")
})

console.log("end")

