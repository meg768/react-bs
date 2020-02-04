
### Usage

```js static
import {Icon} from 'react-bootify';
/* or */
import Icon from 'react-bootify/components/icon';
```

### Example

This example assumes you have installed the [Bootstrap icons](https://www.npmjs.com/package/bootstrap-icons).

```js static
npm install bootstrap-icons --save
```

If you created your react application with [react-create-app](https://www.npmjs.com/package/create-react-app), 
this may work.

```js static
import {ReactComponent as alarmFill} from "bootstrap-icons/icons/alarm-fill.svg";
import {ReactComponent as alarm} from "bootstrap-icons/icons/alarm.svg";
import {ReactComponent as logo} from "./logo.svg";

<Tag>
    <Icon width='3em' height='3em' text='info' icon={alarm}/>
    <Icon width='3em' height='3em' text='warning' icon={alarmFill}/>
    <Icon width='3em' height='3em' text='primary' icon={logo}/>
</Tag>
 ```

If you are using the [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
or [react-svg-loader](https://www.npmjs.com/package/react-svg-loader) SVG-loaders in WebPack, this may work...

```js 

import {Tag} from 'react-bootify';

var alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
var alarm = require("bootstrap-icons/icons/alarm.svg");
var calendar = require("bootstrap-icons/icons/calendar.svg");
var alertCircle = require("bootstrap-icons/icons/alert-circle.svg");

<Tag>
    <Icon width='3em' height='3em' text='warning' icon={alarmFill}/>
    <Icon width='3em' height='3em' text='info' icon={alarm}/>
    <Icon width='3em' height='3em' text='dark' icon={calendar}/>
    <Icon width='3em' height='3em' text='dark' icon={alertCircle}/>
</Tag>
 ```

### Other Icons Besides Inline SVG

Use the **src** property to display external icon files. An **<img/>** tag is used to display the icon.

```js 

import {Tag} from 'react-bootify';

<Tag>
    <Icon margin={2} src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width='2em' height='2em'/>
    <Icon margin={2} src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width='4em' height='4em'/>
</Tag>
```



### Sample of Bootstrap Icons in Beta Version

Here is a sample of the complete set of the Bootstrap Icons (Beta)

```js 

import {Tag, Container, Row, Col} from 'react-bootify';

function renderIcons() {
    var icons = [];

    icons.push({name:'alarm-fill', icon:require('bootstrap-icons/icons/alarm-fill.svg')});
    icons.push({name:'alarm', icon:require('bootstrap-icons/icons/alarm.svg')});
    icons.push({name:'alert-circle-fill', icon:require('bootstrap-icons/icons/alert-circle-fill.svg')});
    icons.push({name:'alert-circle', icon:require('bootstrap-icons/icons/alert-circle.svg')});
    icons.push({name:'alert-octagon-fill', icon:require('bootstrap-icons/icons/alert-octagon-fill.svg')});
    icons.push({name:'alert-octagon', icon:require('bootstrap-icons/icons/alert-octagon.svg')});
    icons.push({name:'alert-square-fill', icon:require('bootstrap-icons/icons/alert-square-fill.svg')});
    icons.push({name:'alert-square', icon:require('bootstrap-icons/icons/alert-square.svg')});
    icons.push({name:'alert-triangle-fill', icon:require('bootstrap-icons/icons/alert-triangle-fill.svg')});
    icons.push({name:'alert-triangle', icon:require('bootstrap-icons/icons/alert-triangle.svg')});
    icons.push({name:'archive-fill', icon:require('bootstrap-icons/icons/archive-fill.svg')});
    icons.push({name:'archive', icon:require('bootstrap-icons/icons/archive.svg')});
    icons.push({name:'arrow-bar-bottom', icon:require('bootstrap-icons/icons/arrow-bar-bottom.svg')});
    icons.push({name:'arrow-bar-left', icon:require('bootstrap-icons/icons/arrow-bar-left.svg')});
    icons.push({name:'arrow-bar-right', icon:require('bootstrap-icons/icons/arrow-bar-right.svg')});
    icons.push({name:'arrow-bar-up', icon:require('bootstrap-icons/icons/arrow-bar-up.svg')});
    icons.push({name:'arrow-clockwise', icon:require('bootstrap-icons/icons/arrow-clockwise.svg')});
    icons.push({name:'arrow-counterclockwise', icon:require('bootstrap-icons/icons/arrow-counterclockwise.svg')});
    icons.push({name:'arrow-down-left', icon:require('bootstrap-icons/icons/arrow-down-left.svg')});
    icons.push({name:'arrow-down-right', icon:require('bootstrap-icons/icons/arrow-down-right.svg')});
    icons.push({name:'arrow-down-short', icon:require('bootstrap-icons/icons/arrow-down-short.svg')});
    icons.push({name:'arrow-down', icon:require('bootstrap-icons/icons/arrow-down.svg')});
    icons.push({name:'arrow-left-right', icon:require('bootstrap-icons/icons/arrow-left-right.svg')});
    icons.push({name:'arrow-left-short', icon:require('bootstrap-icons/icons/arrow-left-short.svg')});
    icons.push({name:'arrow-left', icon:require('bootstrap-icons/icons/arrow-left.svg')});
    icons.push({name:'arrow-repeat', icon:require('bootstrap-icons/icons/arrow-repeat.svg')});
    icons.push({name:'arrow-right-short', icon:require('bootstrap-icons/icons/arrow-right-short.svg')});
    icons.push({name:'arrow-right', icon:require('bootstrap-icons/icons/arrow-right.svg')});
    icons.push({name:'arrow-up-down', icon:require('bootstrap-icons/icons/arrow-up-down.svg')});
    icons.push({name:'arrow-up-left', icon:require('bootstrap-icons/icons/arrow-up-left.svg')});
    icons.push({name:'arrow-up-right', icon:require('bootstrap-icons/icons/arrow-up-right.svg')});
    icons.push({name:'arrow-up-short', icon:require('bootstrap-icons/icons/arrow-up-short.svg')});
    icons.push({name:'arrow-up', icon:require('bootstrap-icons/icons/arrow-up.svg')});
    icons.push({name:'arrows-angle-contract', icon:require('bootstrap-icons/icons/arrows-angle-contract.svg')});
    icons.push({name:'arrows-angle-expand', icon:require('bootstrap-icons/icons/arrows-angle-expand.svg')});
    icons.push({name:'arrows-collapse', icon:require('bootstrap-icons/icons/arrows-collapse.svg')});
    icons.push({name:'arrows-expand', icon:require('bootstrap-icons/icons/arrows-expand.svg')});
    icons.push({name:'arrows-fullscreen', icon:require('bootstrap-icons/icons/arrows-fullscreen.svg')});
    icons.push({name:'at', icon:require('bootstrap-icons/icons/at.svg')});
    icons.push({name:'award', icon:require('bootstrap-icons/icons/award.svg')});
    icons.push({name:'backspace-fill', icon:require('bootstrap-icons/icons/backspace-fill.svg')});
    icons.push({name:'backspace-reverse-fill', icon:require('bootstrap-icons/icons/backspace-reverse-fill.svg')});
    icons.push({name:'backspace-reverse', icon:require('bootstrap-icons/icons/backspace-reverse.svg')});
    icons.push({name:'backspace', icon:require('bootstrap-icons/icons/backspace.svg')});
    icons.push({name:'bar-chart-fill', icon:require('bootstrap-icons/icons/bar-chart-fill.svg')});
    icons.push({name:'bar-chart', icon:require('bootstrap-icons/icons/bar-chart.svg')});
    icons.push({name:'battery-charging', icon:require('bootstrap-icons/icons/battery-charging.svg')});
    icons.push({name:'battery-full', icon:require('bootstrap-icons/icons/battery-full.svg')});
    icons.push({name:'battery', icon:require('bootstrap-icons/icons/battery.svg')});
    icons.push({name:'bell-fill', icon:require('bootstrap-icons/icons/bell-fill.svg')});
    icons.push({name:'bell', icon:require('bootstrap-icons/icons/bell.svg')});
    icons.push({name:'blockquote-left', icon:require('bootstrap-icons/icons/blockquote-left.svg')});
    icons.push({name:'blockquote-right', icon:require('bootstrap-icons/icons/blockquote-right.svg')});
    icons.push({name:'book-half-fill', icon:require('bootstrap-icons/icons/book-half-fill.svg')});
    icons.push({name:'book', icon:require('bootstrap-icons/icons/book.svg')});
    icons.push({name:'bookmark-fill', icon:require('bootstrap-icons/icons/bookmark-fill.svg')});
    icons.push({name:'bookmark', icon:require('bootstrap-icons/icons/bookmark.svg')});
    icons.push({name:'bootstrap-fill', icon:require('bootstrap-icons/icons/bootstrap-fill.svg')});
    icons.push({name:'bootstrap-reboot', icon:require('bootstrap-icons/icons/bootstrap-reboot.svg')});
    icons.push({name:'bootstrap', icon:require('bootstrap-icons/icons/bootstrap.svg')});
    icons.push({name:'box-arrow-bottom-left', icon:require('bootstrap-icons/icons/box-arrow-bottom-left.svg')});
    icons.push({name:'box-arrow-bottom-right', icon:require('bootstrap-icons/icons/box-arrow-bottom-right.svg')});
    icons.push({name:'box-arrow-down', icon:require('bootstrap-icons/icons/box-arrow-down.svg')});
    icons.push({name:'box-arrow-left', icon:require('bootstrap-icons/icons/box-arrow-left.svg')});
    icons.push({name:'box-arrow-right', icon:require('bootstrap-icons/icons/box-arrow-right.svg')});
    icons.push({name:'box-arrow-up-left', icon:require('bootstrap-icons/icons/box-arrow-up-left.svg')});
    icons.push({name:'box-arrow-up-right', icon:require('bootstrap-icons/icons/box-arrow-up-right.svg')});
    icons.push({name:'box-arrow-up', icon:require('bootstrap-icons/icons/box-arrow-up.svg')});
    icons.push({name:'braces', icon:require('bootstrap-icons/icons/braces.svg')});
    icons.push({name:'brightness-fill-high', icon:require('bootstrap-icons/icons/brightness-fill-high.svg')});
    icons.push({name:'brightness-fill-low', icon:require('bootstrap-icons/icons/brightness-fill-low.svg')});
    icons.push({name:'brightness-high', icon:require('bootstrap-icons/icons/brightness-high.svg')});
    icons.push({name:'brightness-low', icon:require('bootstrap-icons/icons/brightness-low.svg')});
    icons.push({name:'brush', icon:require('bootstrap-icons/icons/brush.svg')});
    icons.push({name:'bucket-fill', icon:require('bootstrap-icons/icons/bucket-fill.svg')});
    icons.push({name:'bucket', icon:require('bootstrap-icons/icons/bucket.svg')});
    icons.push({name:'building', icon:require('bootstrap-icons/icons/building.svg')});
    icons.push({name:'bullseye', icon:require('bootstrap-icons/icons/bullseye.svg')});
    icons.push({name:'calendar-fill', icon:require('bootstrap-icons/icons/calendar-fill.svg')});
    icons.push({name:'calendar', icon:require('bootstrap-icons/icons/calendar.svg')});
    icons.push({name:'camera-video-fill', icon:require('bootstrap-icons/icons/camera-video-fill.svg')});
    icons.push({name:'camera-video', icon:require('bootstrap-icons/icons/camera-video.svg')});
    icons.push({name:'camera', icon:require('bootstrap-icons/icons/camera.svg')});
    icons.push({name:'capslock-fill', icon:require('bootstrap-icons/icons/capslock-fill.svg')});
    icons.push({name:'capslock', icon:require('bootstrap-icons/icons/capslock.svg')});
    icons.push({name:'chat-fill', icon:require('bootstrap-icons/icons/chat-fill.svg')});
    icons.push({name:'chat', icon:require('bootstrap-icons/icons/chat.svg')});
    icons.push({name:'check-box', icon:require('bootstrap-icons/icons/check-box.svg')});
    icons.push({name:'check-circle', icon:require('bootstrap-icons/icons/check-circle.svg')});
    icons.push({name:'check', icon:require('bootstrap-icons/icons/check.svg')});
    icons.push({name:'chevron-compact-down', icon:require('bootstrap-icons/icons/chevron-compact-down.svg')});
    icons.push({name:'chevron-compact-left', icon:require('bootstrap-icons/icons/chevron-compact-left.svg')});
    icons.push({name:'chevron-compact-right', icon:require('bootstrap-icons/icons/chevron-compact-right.svg')});
    icons.push({name:'chevron-compact-up', icon:require('bootstrap-icons/icons/chevron-compact-up.svg')});
    icons.push({name:'chevron-down', icon:require('bootstrap-icons/icons/chevron-down.svg')});
    icons.push({name:'chevron-left', icon:require('bootstrap-icons/icons/chevron-left.svg')});
    icons.push({name:'chevron-right', icon:require('bootstrap-icons/icons/chevron-right.svg')});
    icons.push({name:'chevron-up', icon:require('bootstrap-icons/icons/chevron-up.svg')});
    icons.push({name:'circle-fill', icon:require('bootstrap-icons/icons/circle-fill.svg')});
    icons.push({name:'circle-half', icon:require('bootstrap-icons/icons/circle-half.svg')});
    icons.push({name:'circle-slash', icon:require('bootstrap-icons/icons/circle-slash.svg')});
    icons.push({name:'circle', icon:require('bootstrap-icons/icons/circle.svg')});
    icons.push({name:'clock-fill', icon:require('bootstrap-icons/icons/clock-fill.svg')});
    icons.push({name:'clock', icon:require('bootstrap-icons/icons/clock.svg')});
    icons.push({name:'cloud-download', icon:require('bootstrap-icons/icons/cloud-download.svg')});
    icons.push({name:'cloud-fill', icon:require('bootstrap-icons/icons/cloud-fill.svg')});
    icons.push({name:'cloud-upload', icon:require('bootstrap-icons/icons/cloud-upload.svg')});
    icons.push({name:'cloud', icon:require('bootstrap-icons/icons/cloud.svg')});
    icons.push({name:'code-slash', icon:require('bootstrap-icons/icons/code-slash.svg')});
    icons.push({name:'code', icon:require('bootstrap-icons/icons/code.svg')});
    icons.push({name:'columns-gutters', icon:require('bootstrap-icons/icons/columns-gutters.svg')});
    icons.push({name:'columns', icon:require('bootstrap-icons/icons/columns.svg')});
    icons.push({name:'command', icon:require('bootstrap-icons/icons/command.svg')});
    icons.push({name:'compass', icon:require('bootstrap-icons/icons/compass.svg')});
    icons.push({name:'cone-striped', icon:require('bootstrap-icons/icons/cone-striped.svg')});
    icons.push({name:'cone', icon:require('bootstrap-icons/icons/cone.svg')});
    icons.push({name:'controller', icon:require('bootstrap-icons/icons/controller.svg')});
    icons.push({name:'credit-card', icon:require('bootstrap-icons/icons/credit-card.svg')});
    icons.push({name:'cursor-fill', icon:require('bootstrap-icons/icons/cursor-fill.svg')});
    icons.push({name:'cursor', icon:require('bootstrap-icons/icons/cursor.svg')});
    icons.push({name:'dash', icon:require('bootstrap-icons/icons/dash.svg')});
    icons.push({name:'diamond-half', icon:require('bootstrap-icons/icons/diamond-half.svg')});
    icons.push({name:'diamond', icon:require('bootstrap-icons/icons/diamond.svg')});
    icons.push({name:'display-fill', icon:require('bootstrap-icons/icons/display-fill.svg')});
    icons.push({name:'display', icon:require('bootstrap-icons/icons/display.svg')});
    icons.push({name:'document-code', icon:require('bootstrap-icons/icons/document-code.svg')});
    icons.push({name:'document-diff', icon:require('bootstrap-icons/icons/document-diff.svg')});
    icons.push({name:'document-richtext', icon:require('bootstrap-icons/icons/document-richtext.svg')});
    icons.push({name:'document-spreadsheet', icon:require('bootstrap-icons/icons/document-spreadsheet.svg')});
    icons.push({name:'document-text', icon:require('bootstrap-icons/icons/document-text.svg')});
    icons.push({name:'document', icon:require('bootstrap-icons/icons/document.svg')});
    icons.push({name:'documents-alt', icon:require('bootstrap-icons/icons/documents-alt.svg')});
    icons.push({name:'documents', icon:require('bootstrap-icons/icons/documents.svg')});
    icons.push({name:'dot', icon:require('bootstrap-icons/icons/dot.svg')});
    icons.push({name:'download', icon:require('bootstrap-icons/icons/download.svg')});
    icons.push({name:'egg-fried', icon:require('bootstrap-icons/icons/egg-fried.svg')});
    icons.push({name:'eject-fill', icon:require('bootstrap-icons/icons/eject-fill.svg')});
    icons.push({name:'eject', icon:require('bootstrap-icons/icons/eject.svg')});
    icons.push({name:'envelope-fill', icon:require('bootstrap-icons/icons/envelope-fill.svg')});
    icons.push({name:'envelope-open-fill', icon:require('bootstrap-icons/icons/envelope-open-fill.svg')});
    icons.push({name:'envelope-open', icon:require('bootstrap-icons/icons/envelope-open.svg')});
    icons.push({name:'envelope', icon:require('bootstrap-icons/icons/envelope.svg')});
    icons.push({name:'eye-fill', icon:require('bootstrap-icons/icons/eye-fill.svg')});
    icons.push({name:'eye-slash-fill', icon:require('bootstrap-icons/icons/eye-slash-fill.svg')});
    icons.push({name:'eye-slash', icon:require('bootstrap-icons/icons/eye-slash.svg')});
    icons.push({name:'eye', icon:require('bootstrap-icons/icons/eye.svg')});
    icons.push({name:'filter', icon:require('bootstrap-icons/icons/filter.svg')});
    icons.push({name:'flag-fill', icon:require('bootstrap-icons/icons/flag-fill.svg')});
    icons.push({name:'flag', icon:require('bootstrap-icons/icons/flag.svg')});
    icons.push({name:'folder-fill', icon:require('bootstrap-icons/icons/folder-fill.svg')});
    icons.push({name:'folder-symlink-fill', icon:require('bootstrap-icons/icons/folder-symlink-fill.svg')});
    icons.push({name:'folder-symlink', icon:require('bootstrap-icons/icons/folder-symlink.svg')});
    icons.push({name:'folder', icon:require('bootstrap-icons/icons/folder.svg')});
    icons.push({name:'fonts', icon:require('bootstrap-icons/icons/fonts.svg')});
    icons.push({name:'forward-fill', icon:require('bootstrap-icons/icons/forward-fill.svg')});
    icons.push({name:'forward', icon:require('bootstrap-icons/icons/forward.svg')});
    icons.push({name:'gear-fill', icon:require('bootstrap-icons/icons/gear-fill.svg')});
    icons.push({name:'gear-wide-connected', icon:require('bootstrap-icons/icons/gear-wide-connected.svg')});
    icons.push({name:'gear-wide', icon:require('bootstrap-icons/icons/gear-wide.svg')});
    icons.push({name:'gear', icon:require('bootstrap-icons/icons/gear.svg')});
    icons.push({name:'geo', icon:require('bootstrap-icons/icons/geo.svg')});
    icons.push({name:'graph-down', icon:require('bootstrap-icons/icons/graph-down.svg')});
    icons.push({name:'graph-up', icon:require('bootstrap-icons/icons/graph-up.svg')});
    icons.push({name:'grid-fill', icon:require('bootstrap-icons/icons/grid-fill.svg')});
    icons.push({name:'grid', icon:require('bootstrap-icons/icons/grid.svg')});
    icons.push({name:'hammer', icon:require('bootstrap-icons/icons/hammer.svg')});
    icons.push({name:'hash', icon:require('bootstrap-icons/icons/hash.svg')});
    icons.push({name:'heart-fill', icon:require('bootstrap-icons/icons/heart-fill.svg')});
    icons.push({name:'heart', icon:require('bootstrap-icons/icons/heart.svg')});
    icons.push({name:'house-fill', icon:require('bootstrap-icons/icons/house-fill.svg')});
    icons.push({name:'house', icon:require('bootstrap-icons/icons/house.svg')});
    icons.push({name:'image-alt', icon:require('bootstrap-icons/icons/image-alt.svg')});
    icons.push({name:'image-fill', icon:require('bootstrap-icons/icons/image-fill.svg')});
    icons.push({name:'image', icon:require('bootstrap-icons/icons/image.svg')});
    icons.push({name:'images', icon:require('bootstrap-icons/icons/images.svg')});
    icons.push({name:'inbox-fill', icon:require('bootstrap-icons/icons/inbox-fill.svg')});
    icons.push({name:'inbox', icon:require('bootstrap-icons/icons/inbox.svg')});
    icons.push({name:'inboxes-fill', icon:require('bootstrap-icons/icons/inboxes-fill.svg')});
    icons.push({name:'inboxes', icon:require('bootstrap-icons/icons/inboxes.svg')});
    icons.push({name:'info-fill', icon:require('bootstrap-icons/icons/info-fill.svg')});
    icons.push({name:'info-square-fill', icon:require('bootstrap-icons/icons/info-square-fill.svg')});
    icons.push({name:'info-square', icon:require('bootstrap-icons/icons/info-square.svg')});
    icons.push({name:'info', icon:require('bootstrap-icons/icons/info.svg')});
    icons.push({name:'justify-left', icon:require('bootstrap-icons/icons/justify-left.svg')});
    icons.push({name:'justify-right', icon:require('bootstrap-icons/icons/justify-right.svg')});
    icons.push({name:'justify', icon:require('bootstrap-icons/icons/justify.svg')});
    icons.push({name:'kanban-fill', icon:require('bootstrap-icons/icons/kanban-fill.svg')});
    icons.push({name:'kanban', icon:require('bootstrap-icons/icons/kanban.svg')});
    icons.push({name:'laptop', icon:require('bootstrap-icons/icons/laptop.svg')});
    icons.push({name:'layout-sidebar-reverse', icon:require('bootstrap-icons/icons/layout-sidebar-reverse.svg')});
    icons.push({name:'layout-sidebar', icon:require('bootstrap-icons/icons/layout-sidebar.svg')});
    icons.push({name:'layout-split', icon:require('bootstrap-icons/icons/layout-split.svg')});
    icons.push({name:'list-check', icon:require('bootstrap-icons/icons/list-check.svg')});
    icons.push({name:'list-ol', icon:require('bootstrap-icons/icons/list-ol.svg')});
    icons.push({name:'list-task', icon:require('bootstrap-icons/icons/list-task.svg')});
    icons.push({name:'list-ul', icon:require('bootstrap-icons/icons/list-ul.svg')});
    icons.push({name:'list', icon:require('bootstrap-icons/icons/list.svg')});
    icons.push({name:'lock-fill', icon:require('bootstrap-icons/icons/lock-fill.svg')});
    icons.push({name:'lock', icon:require('bootstrap-icons/icons/lock.svg')});
    icons.push({name:'map', icon:require('bootstrap-icons/icons/map.svg')});
    icons.push({name:'mic', icon:require('bootstrap-icons/icons/mic.svg')});
    icons.push({name:'moon', icon:require('bootstrap-icons/icons/moon.svg')});
    icons.push({name:'music-player-fill', icon:require('bootstrap-icons/icons/music-player-fill.svg')});
    icons.push({name:'music-player', icon:require('bootstrap-icons/icons/music-player.svg')});
    icons.push({name:'option', icon:require('bootstrap-icons/icons/option.svg')});
    icons.push({name:'outlet', icon:require('bootstrap-icons/icons/outlet.svg')});
    icons.push({name:'pause-fill', icon:require('bootstrap-icons/icons/pause-fill.svg')});
    icons.push({name:'pause', icon:require('bootstrap-icons/icons/pause.svg')});
    icons.push({name:'pen', icon:require('bootstrap-icons/icons/pen.svg')});
    icons.push({name:'pencil', icon:require('bootstrap-icons/icons/pencil.svg')});
    icons.push({name:'people-fill', icon:require('bootstrap-icons/icons/people-fill.svg')});
    icons.push({name:'people', icon:require('bootstrap-icons/icons/people.svg')});
    icons.push({name:'person-fill', icon:require('bootstrap-icons/icons/person-fill.svg')});
    icons.push({name:'person', icon:require('bootstrap-icons/icons/person.svg')});
    icons.push({name:'phone-landscape', icon:require('bootstrap-icons/icons/phone-landscape.svg')});
    icons.push({name:'phone', icon:require('bootstrap-icons/icons/phone.svg')});
    icons.push({name:'pie-chart-fill', icon:require('bootstrap-icons/icons/pie-chart-fill.svg')});
    icons.push({name:'pie-chart', icon:require('bootstrap-icons/icons/pie-chart.svg')});
    icons.push({name:'play-fill', icon:require('bootstrap-icons/icons/play-fill.svg')});
    icons.push({name:'play', icon:require('bootstrap-icons/icons/play.svg')});
    icons.push({name:'plug', icon:require('bootstrap-icons/icons/plug.svg')});
    icons.push({name:'plus', icon:require('bootstrap-icons/icons/plus.svg')});
    icons.push({name:'power', icon:require('bootstrap-icons/icons/power.svg')});
    icons.push({name:'question-fill', icon:require('bootstrap-icons/icons/question-fill.svg')});
    icons.push({name:'question-square-fill', icon:require('bootstrap-icons/icons/question-square-fill.svg')});
    icons.push({name:'question-square', icon:require('bootstrap-icons/icons/question-square.svg')});
    icons.push({name:'question', icon:require('bootstrap-icons/icons/question.svg')});
    icons.push({name:'reply-all-fill', icon:require('bootstrap-icons/icons/reply-all-fill.svg')});
    icons.push({name:'reply-all', icon:require('bootstrap-icons/icons/reply-all.svg')});
    icons.push({name:'reply-fill', icon:require('bootstrap-icons/icons/reply-fill.svg')});
    icons.push({name:'reply', icon:require('bootstrap-icons/icons/reply.svg')});
    icons.push({name:'screwdriver', icon:require('bootstrap-icons/icons/screwdriver.svg')});
    icons.push({name:'search', icon:require('bootstrap-icons/icons/search.svg')});
    icons.push({name:'shield-fill', icon:require('bootstrap-icons/icons/shield-fill.svg')});
    icons.push({name:'shield-lock-fill', icon:require('bootstrap-icons/icons/shield-lock-fill.svg')});
    icons.push({name:'shield-lock', icon:require('bootstrap-icons/icons/shield-lock.svg')});
    icons.push({name:'shield-shaded', icon:require('bootstrap-icons/icons/shield-shaded.svg')});
    icons.push({name:'shield', icon:require('bootstrap-icons/icons/shield.svg')});
    icons.push({name:'shift-fill', icon:require('bootstrap-icons/icons/shift-fill.svg')});
    icons.push({name:'shift', icon:require('bootstrap-icons/icons/shift.svg')});
    icons.push({name:'skip-backward-fill', icon:require('bootstrap-icons/icons/skip-backward-fill.svg')});
    icons.push({name:'skip-backward', icon:require('bootstrap-icons/icons/skip-backward.svg')});
    icons.push({name:'skip-end-fill', icon:require('bootstrap-icons/icons/skip-end-fill.svg')});
    icons.push({name:'skip-end', icon:require('bootstrap-icons/icons/skip-end.svg')});
    icons.push({name:'skip-forward-fill', icon:require('bootstrap-icons/icons/skip-forward-fill.svg')});
    icons.push({name:'skip-forward', icon:require('bootstrap-icons/icons/skip-forward.svg')});
    icons.push({name:'skip-start-fill', icon:require('bootstrap-icons/icons/skip-start-fill.svg')});
    icons.push({name:'skip-start', icon:require('bootstrap-icons/icons/skip-start.svg')});
    icons.push({name:'speaker', icon:require('bootstrap-icons/icons/speaker.svg')});
    icons.push({name:'square-fill', icon:require('bootstrap-icons/icons/square-fill.svg')});
    icons.push({name:'square-half', icon:require('bootstrap-icons/icons/square-half.svg')});
    icons.push({name:'square', icon:require('bootstrap-icons/icons/square.svg')});
    icons.push({name:'star-fill', icon:require('bootstrap-icons/icons/star-fill.svg')});
    icons.push({name:'star-half', icon:require('bootstrap-icons/icons/star-half.svg')});
    icons.push({name:'star', icon:require('bootstrap-icons/icons/star.svg')});
    icons.push({name:'stop-fill', icon:require('bootstrap-icons/icons/stop-fill.svg')});
    icons.push({name:'stop', icon:require('bootstrap-icons/icons/stop.svg')});
    icons.push({name:'stopwatch-fill', icon:require('bootstrap-icons/icons/stopwatch-fill.svg')});
    icons.push({name:'stopwatch', icon:require('bootstrap-icons/icons/stopwatch.svg')});
    icons.push({name:'sun', icon:require('bootstrap-icons/icons/sun.svg')});
    icons.push({name:'table', icon:require('bootstrap-icons/icons/table.svg')});
    icons.push({name:'tablet-landscape', icon:require('bootstrap-icons/icons/tablet-landscape.svg')});
    icons.push({name:'tablet', icon:require('bootstrap-icons/icons/tablet.svg')});
    icons.push({name:'tag-fill', icon:require('bootstrap-icons/icons/tag-fill.svg')});
    icons.push({name:'tag', icon:require('bootstrap-icons/icons/tag.svg')});
    icons.push({name:'terminal-fill', icon:require('bootstrap-icons/icons/terminal-fill.svg')});
    icons.push({name:'terminal', icon:require('bootstrap-icons/icons/terminal.svg')});
    icons.push({name:'text-center', icon:require('bootstrap-icons/icons/text-center.svg')});
    icons.push({name:'text-indent-left', icon:require('bootstrap-icons/icons/text-indent-left.svg')});
    icons.push({name:'text-indent-right', icon:require('bootstrap-icons/icons/text-indent-right.svg')});
    icons.push({name:'text-left', icon:require('bootstrap-icons/icons/text-left.svg')});
    icons.push({name:'text-right', icon:require('bootstrap-icons/icons/text-right.svg')});
    icons.push({name:'three-dots-vertical', icon:require('bootstrap-icons/icons/three-dots-vertical.svg')});
    icons.push({name:'three-dots', icon:require('bootstrap-icons/icons/three-dots.svg')});
    icons.push({name:'toggle-off', icon:require('bootstrap-icons/icons/toggle-off.svg')});
    icons.push({name:'toggle-on', icon:require('bootstrap-icons/icons/toggle-on.svg')});
    icons.push({name:'toggles', icon:require('bootstrap-icons/icons/toggles.svg')});
    icons.push({name:'tools', icon:require('bootstrap-icons/icons/tools.svg')});
    icons.push({name:'trash-fill', icon:require('bootstrap-icons/icons/trash-fill.svg')});
    icons.push({name:'trash', icon:require('bootstrap-icons/icons/trash.svg')});
    icons.push({name:'triangle-fill', icon:require('bootstrap-icons/icons/triangle-fill.svg')});
    icons.push({name:'triangle-half', icon:require('bootstrap-icons/icons/triangle-half.svg')});
    icons.push({name:'triangle', icon:require('bootstrap-icons/icons/triangle.svg')});
    icons.push({name:'trophy', icon:require('bootstrap-icons/icons/trophy.svg')});
    icons.push({name:'tv-fill', icon:require('bootstrap-icons/icons/tv-fill.svg')});
    icons.push({name:'tv', icon:require('bootstrap-icons/icons/tv.svg')});
    icons.push({name:'type-bold', icon:require('bootstrap-icons/icons/type-bold.svg')});
    icons.push({name:'type-h1', icon:require('bootstrap-icons/icons/type-h1.svg')});
    icons.push({name:'type-h2', icon:require('bootstrap-icons/icons/type-h2.svg')});
    icons.push({name:'type-h3', icon:require('bootstrap-icons/icons/type-h3.svg')});
    icons.push({name:'type-italic', icon:require('bootstrap-icons/icons/type-italic.svg')});
    icons.push({name:'type-strikethrough', icon:require('bootstrap-icons/icons/type-strikethrough.svg')});
    icons.push({name:'type-underline', icon:require('bootstrap-icons/icons/type-underline.svg')});
    icons.push({name:'type', icon:require('bootstrap-icons/icons/type.svg')});
    icons.push({name:'unlock-fill', icon:require('bootstrap-icons/icons/unlock-fill.svg')});
    icons.push({name:'unlock', icon:require('bootstrap-icons/icons/unlock.svg')});
    icons.push({name:'upload', icon:require('bootstrap-icons/icons/upload.svg')});
    icons.push({name:'volume-down-fill', icon:require('bootstrap-icons/icons/volume-down-fill.svg')});
    icons.push({name:'volume-down', icon:require('bootstrap-icons/icons/volume-down.svg')});
    icons.push({name:'volume-mute-fill', icon:require('bootstrap-icons/icons/volume-mute-fill.svg')});
    icons.push({name:'volume-mute', icon:require('bootstrap-icons/icons/volume-mute.svg')});
    icons.push({name:'volume-up-fill', icon:require('bootstrap-icons/icons/volume-up-fill.svg')});
    icons.push({name:'volume-up', icon:require('bootstrap-icons/icons/volume-up.svg')});
    icons.push({name:'wallet', icon:require('bootstrap-icons/icons/wallet.svg')});
    icons.push({name:'watch', icon:require('bootstrap-icons/icons/watch.svg')});
    icons.push({name:'wifi', icon:require('bootstrap-icons/icons/wifi.svg')});
    icons.push({name:'window', icon:require('bootstrap-icons/icons/window.svg')});
    icons.push({name:'wrench', icon:require('bootstrap-icons/icons/wrench.svg')});
    icons.push({name:'x-circle-fill', icon:require('bootstrap-icons/icons/x-circle-fill.svg')});
    icons.push({name:'x-circle', icon:require('bootstrap-icons/icons/x-circle.svg')});
    icons.push({name:'x-octagon-fill', icon:require('bootstrap-icons/icons/x-octagon-fill.svg')});
    icons.push({name:'x-octagon', icon:require('bootstrap-icons/icons/x-octagon.svg')});
    icons.push({name:'x-square-fill', icon:require('bootstrap-icons/icons/x-square-fill.svg')});
    icons.push({name:'x-square', icon:require('bootstrap-icons/icons/x-square.svg')});
    icons.push({name:'x', icon:require('bootstrap-icons/icons/x.svg')});

    return icons.map((icon, index) => {
        return (
            <Col key={index} margin={{bottom:1}}>
                <Tag  text='center' padding={{left:1, right:1, top:3, bottom:3}} margin={1} rounded bg='light' >
                    <Icon className='zoom' width='32px' height='32px' icon={icon.icon}/>
                </Tag>
                <Tag text='muted center' style={{fontSize:'0.5em'}} padding={{top:1}}>
                    {icon.name}
                </Tag>
            </Col>
        );
    });
}

<Container>
    <Row cols={{xs:3, sm:3, md:4, lg:5, xl:6}}>
        {renderIcons()}
    </Row>
</Container>
 ```
