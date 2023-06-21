(()=>{"use strict";var m,J={7635:(m,E,D)=>{var R=D(5364),T=D(1983),u=(()=>{return(i=u||(u={})).d="d",i.day="day",i.days="days",i.h="h",i.hour="hour",i.hours="hours",i.s="s",i.second="second",i.seconds="seconds",i.m="m",i.minute="minute",i.minutes="minutes",i.millisecond="millisecond",i.milliseconds="milliseconds",i.workday="workday",u;var i})();const h=(i,e)=>i.add(e||n.ZERO);class f{constructor(e){let t;this.dateValue=e,this.value=e;try{t=f.parseDate(e)}catch(s){t=new Date(e)}this.moment=R(t),this.date=this.moment.format("YYYY-MM-DD"),this.time=this.moment.format("HH:mm"),this.dayName=this.capitalizeFirstLetter(t.toLocaleDateString("pl-PL",{weekday:"long"})).substr(0,3)}static now(){return new f(R().toISOString())}static from(e){return new f(e)}capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static parseDate(e){return new Date(e.replace(/(\d |\d\d)\.(\d{2})\.(\d{4})/,"$3-$2-$1"))}isSame(e,t){return this.moment.isSame(R(e),t)}equals(e,t){return this.moment.isSame(R(e.value),t)}isSameOrAfter(e,t){return this.moment.isSameOrAfter(R(e.value),t)}isBefore(e,t){return this.moment.isBefore(e.moment,t)}isSameOrBefore(e,t){return this.moment.isSameOrBefore(e.moment,t)}isAfter(e,t){return this.moment.isAfter(e.moment,t)}compare(e){return this.moment.isBefore(e.moment)?-1:1}diffFrom(e,t){return n.fromMilliseconds(this.moment.diff(e.moment,t))}addDays(e){return new f(R(this.date).add(e,u.days).toISOString())}subtractDays(e){return new f(R(this.date).subtract(e,u.days).toISOString())}isValid(){return f.isValid(this)}static isValid(e){return"Invalid date"!==e.date}format(e){return this.moment.format(null!=e?e:"DD-MM-YYYY")}}class n{constructor(e){this.ms=e,this.milliseconds=e}add(e){return n.fromMilliseconds(this.getMilliSeconds()+e.getMilliSeconds())}subtract(e){return n.fromMilliseconds(this.getMilliSeconds()-e.getMilliSeconds())}divide(e=n.ZERO){return e.getMilliSeconds()&&this.getMilliSeconds()?this.getMilliSeconds()/e.getMilliSeconds():0}equals(e){return this.getMilliSeconds()===e.getMilliSeconds()}isZero(){return this.equals(n.ZERO)}isGreaterThan(e){return this.getMilliSeconds()>e.getMilliSeconds()}static fromDays(e){return this.fromHours(24*e)}static fromWorkDays(e){return this.fromHours(8*e)}static fromHours(e){return this.fromMinutes(60*e)}static fromMinutes(e){return this.fromSeconds(60*e)}static fromSeconds(e){return this.fromMilliseconds(1e3*e)}static fromMilliseconds(e){return new n(e)}getBy(e){switch(e){case"d":case"day":case"days":return this.getDays();case"workday":return this.getWorkDays();case"h":case"hour":case"hours":return this.getHours();case"m":case"minute":case"minutes":return this.getMinutes();case"s":case"second":case"seconds":return this.getSeconds();case"millisecond":case"milliseconds":return this.getMilliSeconds();default:throw Error("Unsupported unit:"+e)}}getDays(){return this.round(this.getHours()/24)}getWorkDays(){return this.round(this.getHours()/8)}getHours(){return this.round(this.getMinutes()/60)}getMinutes(){return this.round(this.getSeconds()/60)}getSeconds(){return this.round(this.getMilliSeconds()/1e3)}getMilliSeconds(){return this.ms}round(e){return Math.round(100*(e+Number.EPSILON))/100}}function U(i,e){let t=[],s=f.from(i.date);for(;s.compare(e)<=0;)t.push(f.from(s.date)),s=s.addDays(1);return t}n.ZERO=new n(0);const W=(i,e)=>i+(e||0);class M{constructor(e,t){this.issue=e,this.parentField=t,this.id=(null==e?void 0:e.id)||(null==t?void 0:t.id)||"",this.key=(null==e?void 0:e.key)||(null==t?void 0:t.key)||"",this.self=(null==e?void 0:e.self)||(null==t?void 0:t.self)||"",this.self=(null==e?void 0:e.self)||(null==t?void 0:t.self)||"",this.aggregatetimeoriginalestimate=(null==e?void 0:e.fields.aggregatetimeoriginalestimate)||0,this.timeoriginalestimate=(null==e?void 0:e.fields.timeoriginalestimate)||0,this.timeestimate=(null==e?void 0:e.fields.timeestimate)||0,this.aggregatetimespent=(null==e?void 0:e.fields.aggregatetimespent)||0,this.timespent=(null==e?void 0:e.fields.timespent)||0}static form(e,t){return new M(e,t)}getAggregatetimeoriginalestimate(){return n.fromSeconds(this.aggregatetimeoriginalestimate)}getTimeoriginalestimate(){return M.getTimeoriginalestimate(this)}static getTimeoriginalestimate(e){return n.fromSeconds(e.timeoriginalestimate)}}var b=(()=>{return(i=b||(b={})).Assignee="assignee",i.Attachment="Attachment",i.Comment="Comment",i.Description="description",i.EpicLink="Epic Link",i.Issuetype="issuetype",i.KryteriaAkceptacji="Kryteria akceptacji",i.Labels="labels",i.Link="Link",i.Priority="priority",i.Rank="Rank",i.RemoteIssueLink="RemoteIssueLink",i.Reporter="reporter",i.Resolution="resolution",i.Sprint="Sprint",i.Status="status",i.StoryPoints="Story Points",i.Summary="summary",i.Team="Team",i.Timeestimate="timeestimate",i.Timeoriginalestimate="timeoriginalestimate",i.Timespent="timespent",i.WorklogID="WorklogId",i.WorklogTimeSpent="WorklogTimeSpent",b;var i})(),c=(()=>{return(i=c||(c={})).Bug="Bug",i.DevStory="Dev Story",i.SubTaskDev="Sub-task dev",i.Story="Story",i.SubTask="Sub-task",i.Task="Task",i.DevTask="Dev Task",i.Teet="TEET",c;var i})(),O=(()=>{return(i=O||(O={})).Bug="1",i.DevStory="12501",i.SubTaskDev="12702",i.Story="10700",i.SubTask="5",i.Task="3",i.DevTask="15000",i.Teet="6",O;var i})(),k=(()=>{return(i=k||(k={})).Analizowany="10007",i.Backlog="11237",i.CodeReview="13037",i.Done="10637",i.InProgress="3",i.WaitingForTesting="12837",i.InTesting="12837",i.OnHold="12937",i.Rejected="12838",i.ToDo="11137",k;var i})(),w=(()=>{return(i=w||(w={})).IsBlockedBy="is blocked by",i.IsClonedBy="is cloned by",i.IsDuplicatedBy="is duplicated by",i.IsImplementedBy="is implemented by",i.NastepujePo="Nast\u0119puje po",i.RelatesTo="relates to",i.IsDependentBy="is dependent by",w;var i})(),A=(()=>{return(i=A||(A={})).ADDED="ADDED",i.REMOVED="REMOVED",i.CHANGED="CHANGED",i.NO_CHANGE="NO_CHANGE",A;var i})();class ce{constructor(e,t){const r=e.substring(e.indexOf("[")+1,e.lastIndexOf("]")).split(",");this.id=this.getProperty("id",r),this.name=this.getProperty("name",r),this.state=this.getProperty("state",r),this.goal=this.getProperty("goal",r),this.rapidViewId=+this.getProperty("rapidViewId",r),this.startDate=f.from(this.getProperty("startDate",r)),this.activateDate=f.from(this.getProperty("activateDate",r)),this.endDate=f.from(this.getProperty("endDate",r)),this.completeDate=f.from(this.getProperty("completeDate",r)),this.completeDate=f.from(this.getProperty("completeDate",r)),this.viewTemplate=t+"/secure/RapidBoard.jspa?rapidView="+this.rapidViewId+"&view=reporting&chart=burndownChart&sprint="+this.id+"&estimate="}getProperty(e,t){return t.filter(s=>s.split("=")[0]===e).map(s=>s.split("=")[1])[0]}equals(e){return this.id===e.id}}class g{constructor(e,t,s){this.id=e.id,this.self=e.self,this.expand=e.expand,this.key=e.key,this.changelog=Object.assign(Object.assign({},e.changelog),{histories:(e.changelog.histories||[]).filter(r=>r.items.filter(a=>[b.Assignee,b.Status,b.Issuetype,b.Reporter,b.Timeoriginalestimate,b.WorklogTimeSpent,b.Timeoriginalestimate].includes(a.field))).map(r=>Object.assign(Object.assign({},r),{created:f.from(r.created)}))}),this.fields={aggregatetimeoriginalestimate:e.fields.aggregatetimeoriginalestimate,status:e.fields.status,aggregatetimespent:e.fields.aggregatetimespent,assignee:e.fields.assignee,created:f.from(e.fields.created),description:e.fields.description,issuetype:e.fields.issuetype,labels:e.fields.labels,parent:M.form(t.find(r=>{var a;return r.key===(null===(a=e.fields.parent)||void 0===a?void 0:a.key)}),e.fields.parent),reporter:e.fields.reporter,priority:e.fields.priority,progress:e.fields.progress,summary:e.fields.summary,workratio:e.fields.workratio,timespent:e.fields.timespent,timeoriginalestimate:e.fields.timeoriginalestimate,timeestimate:e.fields.timeestimate,worklog:Object.assign(Object.assign({},e.fields.worklog),{worklogs:g.getIssueWorklogs(e,s)}),subtasks:g.getIssueSubtasks(e,t,s),links:e.fields.issuelinks,sprints:(e.fields.customfield_16004||[]).map(r=>new ce(r,function oe({self:i}){return new URL(i).origin}(e)))}}isUserMainLogger(e,t){const s=this.getAggregatedLoggedWorkPerUser(t),r=Math.max(...Object.values(s).map(a=>a.getBy(u.seconds)));return s[e].getBy(u.seconds)===r}getAggregatedLoggedWorkPerUser(e){const t={};return e.forEach(s=>{t[s]=this.getAggregatedUserLoggedWorkFor(s)}),t}getUserLoggedWorkData(e,t,s=!1){let a=(s?[...this.getSubtasks(),this]:[this]).map(o=>o.getWorklogs().filter(p=>t.isSame(p.started,u.days)&&p.author.name===e)).flat();if(null==a?void 0:a.length)return{issue:this.getBaseData(),comments:a.map(o=>o.comment),sumMs:(a.map(o=>n.fromSeconds(o.timeSpentSeconds)).reduce(h,n.ZERO)||n.ZERO).milliseconds}}getBaseData(){return{key:this.key,id:this.id,fields:{summary:this.fields.summary,status:this.fields.status,priority:this.fields.priority,issuetype:this.fields.issuetype},self:this.self}}getUserLoggedWorkForSubtasks(e){return this.fields.subtasks.reduce((t,s)=>{const r=e.map(a=>({participant:a,work:s.getAggregatedUserLoggedWorkFor(a.name).add(s.getUserBugsLoggedWorkFor(a.name)).add(s.getAggregatedUserBugfixLoggedWorkFor(a.name))}));return t[s.key]={work:r,sum:r.map(({work:a})=>a).reduce(h,n.ZERO)},t},{})}getUserLoggedWorkRatio(e){return 100*this.getAggregatedUserLoggedWorkFor(e).divide(this.getAggregatetimeoriginalestimate())}static getUserLoggedWorkRatio(e,t){return 100*g.getAggregatedUserLoggedWorkFor(e,t).divide(g.getAggregatetimeoriginalestimate(e))}getUserLoggedBugfixWorkRatio(e){return 100*this.getSubtasks().filter(r=>r.isBugFix()).map(r=>r.getAggregatedUserBugfixLoggedWorkFor(e)).reduce(h,n.ZERO).divide(this.getAggregatetimeoriginalestimate())}showWorklogsDataForUser(){return!!this.isWorkRatioValid()&&this.isEstimated()}isWorkRatioValid(){return!(this.getWorkRatio()<=0||this.getWorkRatio()>1e4)}getUserLoggedWorkFor(e){return n.fromSeconds(this.getWorklogs().filter(t=>!e||t.author.name===e).map(t=>t.timeSpentSeconds).reduce(W,0)||0)}getAggregatedUserLoggedWorkFor(e){const t=[...this.fields.subtasks,this].filter(s=>!s.isBug()&&!s.isBugFix()).map(s=>s.fields.worklog.worklogs||[]).flat();return n.fromSeconds(t.filter(s=>!e||s.author.name===e).map(s=>s.timeSpentSeconds).reduce(W,0)||0)}static getAggregatedUserLoggedWorkFor(e,t){const s=[...e.fields.subtasks,e].filter(r=>!g.isBug(r)&&!g.isBugFix(r)).map(r=>r.fields.worklog.worklogs||[]).flat();return n.fromSeconds(s.filter(r=>!t||r.author.name===t).map(r=>r.timeSpentSeconds).reduce(W,0)||0)}getUserBugsLoggedWorkFor(e){return this.isBug()?n.fromSeconds((this.fields.worklog.worklogs||[]).filter(s=>s.author.name===e).map(s=>s.timeSpentSeconds).reduce(W,0)||0):n.ZERO}getAggregatedUserBugfixLoggedWorkFor(e){var t,s;return this.isBugFix()?n.fromSeconds(((null===(s=null===(t=this.fields)||void 0===t?void 0:t.worklog)||void 0===s?void 0:s.worklogs)||[]).filter(r=>r.author.name===e).map(r=>r.timeSpentSeconds).reduce(W,0)||0):n.ZERO}isBug(){return!this.isBugFix()&&([O.Teet,O.Bug].includes(this.fields.issuetype.id)||this.fields.labels.includes("BUG"))}static isBug(e){return!g.isBugFix(e)&&([O.Teet,O.Bug].includes(e.fields.issuetype.id)||e.fields.labels.includes("BUG"))}isBugFix(){return g.isBugFix(this)}static isBugFix(e){return e.fields.labels.includes("BUGFIX")||e.fields.labels.includes("bugfix")}isTask(){return[O.Task].includes(this.fields.issuetype.id)}isDevTask(){return[O.DevTask].includes(this.fields.issuetype.id)}isCr(){return this.fields.labels.filter(Boolean).map(e=>e.toUpperCase()).includes("CR")}isDevelopmentTimeLong(){return this.isEstimated()&&(this.getAggregatetimespent()||n.ZERO).isGreaterThan(this.getAggregatetimeoriginalestimate())}isTestingTimeLong(){var e;return!![c.Bug,c.Story,c.DevStory,c.SubTask,c.SubTaskDev,c.Teet].includes(this.getType().name)&&((null===(e=this.getTimeSpentByStatus().get(k.InTesting))||void 0===e?void 0:e.getBy(u.hours))||n.ZERO)>72}isWaitingForTestingTimeLong(){var e;return!![c.Bug,c.Story,c.DevStory,c.SubTask,c.SubTaskDev,c.Teet].includes(this.getType().name)&&((null===(e=this.getTimeSpentByStatus().get(k.WaitingForTesting))||void 0===e?void 0:e.getBy(u.hours))||n.ZERO)>72}getTimeSpentByStatus(){const e=this.getStatusChanges();return e.filter(t=>t.from!==k.Backlog).filter(t=>t.from!==t.to).reduce((t,s)=>{const r=g.getTimeChange(s,e);return t.set(r.status,(t.get(r.status)||n.ZERO).add(r.time))},new Map)}static getTimeChange(e,t){const s=g.findRelatedChange(e,t);return{status:e.from,time:(null==s?void 0:s.on)?e.on.diffFrom(s.on,u.milliseconds):n.ZERO}}static findRelatedChange(e,t){const s=t.filter(r=>r.from!==r.to).filter(r=>e.from!==r.from&&e.to!==r.to).filter(r=>e.on.isSameOrAfter(r.on,u.seconds)).sort((r,a)=>r.on.compare(a.on));return s.length?s[s.length-1]:null}getRemainingTimeEstimate(e,t=u.day){return e.isValid()&&!this.isCreatedAfter(e)&&this.wasUnfinishedOn(e,t)?n.fromSeconds(+(this.getIssueFieldOn(this.getHistories(),e,b.Timeestimate,t)||this.fields.timeestimate||0)):n.ZERO}getOriginalEstimateOn(e,t=u.day){return!e.isValid()||this.isCreatedAfter(e)?n.ZERO:n.fromSeconds(+(this.getIssueFieldOn(this.getHistories(),e,b.Timeoriginalestimate,t)||this.fields.timeoriginalestimate||0))}wasUnfinishedOn(e,t=u.seconds){return this.getStatusAt(e,t)!==k.Done}wasInStatus(e,t,s=u.day){return this.getStatusAt(t,s)===e}getStatusAt(e,t=u.seconds){return this.getIssueFieldOn(this.getHistories(),e,b.Status,t,"to")||k.Backlog}isCreatedAfter(e){return e.isBefore(this.getCreated(),u.day)}createdSameDayOrBefore(e){return e.isSameOrAfter(this.getCreated(),u.day)}getIssueFieldOn(e,t,s,r=u.seconds,a="toString"){const o=e.filter(p=>p.items.find(S=>S.field===s)).filter(p=>t.isSameOrAfter(p.created,r)).map(p=>p.items.filter(S=>S.field===s)).flat();return o.length?o[o.length-1][a]:null}getStatusChanges(){return(this.changelog.histories||[]).map(e=>e.items.filter(t=>t.field===b.Status).map(t=>({on:e.created,from:t.from,to:t.to,author:e.author}))).flat()}static getIssueWorklogs(e,t){return t.map(s=>s.worklogs).flat().filter(s=>s.issueId===e.id)}static getIssueSubtasks(e,t,s){return t.filter(r=>[c.SubTask,c.SubTaskDev].includes(r.fields.issuetype.name)).filter(r=>e.fields.subtasks.map(a=>a.id).includes(r.id)).map(r=>new g(r,t,s))}getType(){return g.getType(this)}static getType(e){return e.fields.issuetype||{}}getAggregatetimeoriginalestimate(){return g.getAggregatetimeoriginalestimate(this)}static getAggregatetimeoriginalestimate(e){return n.fromSeconds(e.fields.aggregatetimeoriginalestimate||e.fields.timeoriginalestimate||0)}isEstimated(){return this.getAggregatetimeoriginalestimate().isGreaterThan(n.ZERO)}getWorkRatio(){return this.fields.workratio}getWorklogs(){return g.getWorklogs(this)}static getWorklogs(e){return e.fields.worklog.worklogs||[]}getWorklogsWithSubtasks(){return g.getWorklogsWithSubtasks(this)}static getWorklogsWithSubtasks(e){return[...g.getSubtasks(e).map(t=>g.getWorklogs(t)).flat(),...g.getWorklogs(e)]}getHistories(){return this.changelog.histories}static getHistories(e){return e.changelog.histories}getAssignee(){var e;return(null===(e=this.fields.assignee)||void 0===e?void 0:e.name)||""}getReporter(){return this.fields.reporter}getLabels(){return g.getLabels(this)}static getLabels(e){return e.fields.labels}getParent(){return this.fields.parent}static getParent(e){return e.fields.parent}getPriority(){return this.fields.priority||{}}getStatus(){return g.getStatus(this)}static getStatus(e){return e.fields.status||{}}getCreated(){return this.fields.created}isStory(){return this.fields.issuetype.name===c.Story}static isStory(e){return e.fields.issuetype.name===c.Story}isDevStory(){return this.fields.issuetype.name===c.DevStory}isSubTask(){return g.isSubTask(this)}static isSubTask(e){return e.fields.issuetype.name===c.SubTask}getSubtasks(){return g.getSubtasks(this)}static getSubtasks(e){return e.fields.subtasks||[]}getSummary(){return g.getSummary(this)}static getSummary(e){return e.fields.summary}getTimeSpent(){return n.fromSeconds(this.fields.timespent||0)}getAggregatetimespent(){return g.getAggregatetimespent(this)}static getAggregatetimespent(e){return n.fromSeconds(e.fields.aggregatetimespent||0)}getDescription(){return this.fields.description||""}getTimeoriginalestimate(){return g.getTimeoriginalestimate(this)}static getTimeoriginalestimate(e){return n.fromSeconds(e.fields.timeoriginalestimate||0)}getWarnings(){return g.getWarnings(this)}static getWarnings(e){const t=[];let s=g.getSubtasks(e).map(o=>g.getAggregatetimeoriginalestimate(o)).reduce(h,n.ZERO);const r=g.getTimeoriginalestimate(e),a=g.getAggregatetimeoriginalestimate(e);return!a.equals(r)&&!a.equals(s)&&t.push("Invalid estimate"),g.isStory(e)&&g.getAggregatetimeoriginalestimate(e).isZero()&&!g.getAggregatetimespent(e).isZero()&&t.push("Logged time in unestimated Story"),g.isSubTask(e)&&!g.isBugFix(e)&&g.getAggregatetimeoriginalestimate(e).isZero()&&!g.getAggregatetimespent(e).isZero()&&M.getTimeoriginalestimate(g.getParent(e)).isZero()&&t.push("Logged time in unestimated Subtask"),t}getLinks(){return g.getLinks(this)}static getLinks(e){return e.fields.links}static getReadiness(e){return this.getBlockingLinks(e).length?"BLOCKED":"READY"}static getBlockingLinks(e){return g.getLinks(e).filter(t=>t.type.inward&&t.inwardIssue&&[w.NastepujePo,w.IsBlockedBy,w.NastepujePo,w.IsDependentBy].includes(t.type.inward)&&![k.Done,k.Rejected].includes(t.inwardIssue.fields.status.id))}getInwardLinks(){return this.getLinks().filter(e=>e.inwardIssue)}getSprints(){return g.getSprints(this)}static getSprints(e){return e.fields.sprints}isInSprint(e){return!!this.getSprints().find(t=>t.equals(e))}isInSprintById(e){return!!this.getSprints().find(t=>t.id===e)}static isInSprintById(e,t){return!!g.getSprints(e).find(s=>s.id===t)}}class he{constructor(e){this.jql=decodeURIComponent(e.jql),this.created=f.from(e.created),this.issues=this.getIssues(e.issues,e.worklogs)}getIssues(e,t){return e.map(s=>new g(s,e,t))}}class L{constructor(e,t){this.key=e.key,this.created=e.getCreated().date,this.type=g.getType(e).name,this.summary=g.getSummary(e),this.status=g.getStatus(e).name,this.originalestimate=g.getAggregatetimeoriginalestimate(e).getBy(u.seconds),this.timeSpentSeconds=g.getAggregatetimespent(e).getBy(u.seconds),this.workratio=Math.round(100*g.getUserLoggedWorkRatio(e))/100,this.subtaskCount=g.getSubtasks(e).length,this.warnings=g.getWarnings(e),this.sprint=t,this.sprints=g.getSprints(e).map(s=>s.name),this.issue=e}static from(e,t){return new L(e,t)}}class P{constructor(e,t){this.roles=[],this.issuesTableDataByRole={},this.issuesByRole={},this.name=e.name,this.key=e.key,this.active=e.active,this.displayData={displayName:e.displayName,key:e.key,emailAddress:e.emailAddress,avatarUrls:e.avatarUrls},t.forEach(s=>this.addIssue(s))}addIssue(e){fe.map(t=>{this.isInRoleFor(e,t)&&(this.issuesByRole[t]=[...this.issuesByRole[t]||[],e],this.issuesTableDataByRole[t]=[...this.issuesTableDataByRole[t]||[],L.from(e)],this.roles=(0,T.uniq)([...this.roles,t]))})}static isAuthor(e){return(e.roles||[]).includes(v.Author)}getTimeSpentByIssueType(){return this.getIssuesInRole(v.Author).reduce((e,t)=>e.set(t.getType().id,(e.get(t.getType().id)||n.ZERO).add(t.getUserLoggedWorkFor(this.name))),new Map)}getAggregateOriginalEstimateSum(e){return this.getIssuesInRole(v.Author).filter(t=>t.showWorklogsDataForUser()).filter(t=>t.isUserMainLogger(this.name,e)).map(t=>t.getAggregatetimeoriginalestimate()).reduce(h,n.ZERO)}getAggregatedUserLoggedWorkSum(e){return this.getIssuesInRole(v.Author).filter(t=>t.showWorklogsDataForUser()).filter(t=>t.isUserMainLogger(this.name,e)).map(t=>t.getAggregatedUserLoggedWorkFor(this.name)).reduce(h,n.ZERO)}getAggregatedUserBugLoggedWorkSum(){return this.getIssuesInRole(v.Author).map(e=>e.getUserBugsLoggedWorkFor(this.name)).reduce(h,n.ZERO)}getAggregatedUserBugfixLoggedWorkSum(){return this.getIssuesInRole(v.Author).map(e=>e.getAggregatedUserBugfixLoggedWorkFor(this.name)).reduce(h,n.ZERO)}getIssuesInRole(e){return this.issuesByRole[e]||[]}isInRoleFor(e,t){var s,r;switch(t){case v.Assignee:return e.getAssignee()===this.name||!!e.getHistories().find(a=>a.items.find(o=>o.field.toString()===t.toString()&&(o.from==this.name||o.to===this.name)));case v.Author:return!!(e.getWorklogs()||[]).find(a=>a.author.name===this.name);case v.Estimator:return!!(null===(s=e.getHistories())||void 0===s?void 0:s.find(a=>a.items.find(o=>o.field.toString()===t.toString()&&this.isSame(a.author))));case v.Reporter:return e.getReporter().name===this.name||!!(null===(r=e.getHistories())||void 0===r?void 0:r.find(a=>a.items.find(o=>o.field.toString()===t.toString()&&(o.from==this.name||o.to===this.name||o.from==this.key||o.to===this.key))));default:return!1}}isSame(e){return this.name===e.name||this.key===e.key}}var v=(()=>{return(i=v||(v={})).Author="WorklogTimeSpent",i.Assignee="assignee",i.Reporter="reporter",i.Estimator="timeoriginalestimate",v;var i})();const fe=[v.Author,v.Assignee,v.Reporter,v.Estimator];class V{constructor(e,t,s){const r=e.getOriginalEstimateOn(s),a=e.getOriginalEstimateOn(t),o=function pe(i,e){return i.isZero()&&e.isGreaterThan(n.ZERO)?A.ADDED:i.isGreaterThan(n.ZERO)&&e.isZero()?A.REMOVED:i.equals(e)?A.NO_CHANGE:A.CHANGED}(r,a);this.issue=e,this.change=o,this.estimateOnPreviousDate=r,this.estimateOn=a}static from(e,t,s){return new V(e,t,s)}}class x{constructor(e){this.issues=e,this.issuesByCreatedOn=K.from(e),this.participants=x.getUniqueOrderedParticipants(e),this.participantsBaseData=this.participants.map(t=>({name:t.name,key:t.key,roles:t.roles,displayData:t.displayData,active:t.active}))}static from(e){return new x(e)}getEstimateDetailsBetweenSum(e,t){return this.getIssuesEstimateDetailsBetween(this.issues,e,t).map(s=>s.estimateOn).reduce(h,n.ZERO)}getEstimateDetailsBetween(e,t){return this.getIssuesEstimateDetailsBetween(this.issues,e,t)}getEstimateByStatusSumBetween(e,t,s){return this.getIssuesEstimateDetailsBetween(this.issues,t,s,r=>r.wasInStatus(e,t)).map(r=>r.estimateOn).reduce(h,n.ZERO)}getIssuesEstimateDetailsBetween(e,t,s,r){return e.filter(r||(()=>!0)).map(a=>V.from(a,t,s)).filter(a=>a.change!==A.NO_CHANGE)}countIssuesByStatus(e,t,s){return this.issuesByCreatedOn.getIssuesCreatedSameOrAfter(t).filter(s||(()=>!0)).filter(r=>r.wasInStatus(e,t)).length}countIssuesByType(e,t){return this.issuesByCreatedOn.getIssuesCreatedSameOrAfter(t).filter(s=>s.getType().id===e).length}countIssuesByPriority(e,t,s){return this.issuesByCreatedOn.getIssuesCreatedSameOrAfter(t).filter(s||(()=>!0)).filter(r=>r.getPriority().name===e).length}getLoggedDates(){return this.issuesByCreatedOn.getLoggedDates()}getLoggedDatesRange(){return this.issuesByCreatedOn.getLoggedDatesRange()}static getUniqueOrderedParticipants(e){const t=e.map(s=>s.getHistories().map(r=>r.author)).flat();return(0,T.orderBy)((0,T.uniqBy)(t,"name"),["active","displayData.displayName"],["desc","asc"]).map(s=>new P(s,e))}getParticipants(){return this.participants}getParticipantsBaseData(e){return e?this.participantsBaseData.filter(e):this.participantsBaseData}getLoggedWorkPerUserData(e,t){return this.issues.map(s=>s.getUserLoggedWorkData(e,t)).filter(Boolean)}getIssues(e){return e?this.issues.filter(e):this.issues}getSprints(){return(0,T.uniqBy)(this.issues.map(e=>e.getSprints()).flat().filter(e=>e.startDate.isValid()&&e.endDate.isValid()),"id")}getIssuesFor(e){return this.getIssues(t=>t.isInSprint(e))}getTeamRatio(e){const t=this.getIssues(e).filter(d=>d.getStatus().id===k.Done).filter(d=>!d.getAggregatetimeoriginalestimate().isZero()&&!d.getAggregatetimespent().isZero()),s=t.map(d=>d.getTimeSpent()).reduce(h,n.ZERO),r=t.map(d=>d.getTimeoriginalestimate()).reduce(h,n.ZERO),a=100*s.divide(r)||0,o=this.getIssues(e).filter(d=>d.getStatus().id!==k.Done).filter(d=>!d.getAggregatetimeoriginalestimate().isZero()&&!d.getAggregatetimespent().isZero()),p=o.map(d=>d.getTimeSpent()).reduce(h,n.ZERO),S=o.map(d=>d.getTimeoriginalestimate()).reduce(h,n.ZERO);return{doneRatio:a,color:(i=a,i<=100?"#5AA454":i<=125?"#ff8c00":"#ff0000"),doneLoggedWorkSum:s,doneOriginalEstimateSum:r,unfinishedOriginalEstimateSum:S,unfinishedLoggedWorkSum:p};var i}getTeamRatioByIssue(e){return this.getIssues(e).filter(t=>!t.getAggregatetimeoriginalestimate().isZero()&&!t.getAggregatetimespent().isZero()).map(t=>({name:t.key,value:t.getUserLoggedWorkRatio()})).filter(t=>t.value)}getUserTimeSpent(e,t,s){return this.getTimeSpentBy(e,t,s)}getTimeSpent(e,t){return this.getTimeSpentBy(e,t)}getTimeSpentBy(e,t,s){return this.getIssues(t).filter(r=>r.isInSprint(e)||r.isDevStory()||r.isTask()).map(r=>r.getWorklogs()).flat().filter(r=>!s||s.name===r.author.name).filter(r=>e.endDate.isAfter(f.from(r.started),u.seconds)&&e.startDate.isBefore(f.from(r.started),u.seconds)).map(r=>n.fromSeconds(r.timeSpentSeconds||0)).reduce(h,n.ZERO)}getEstimatedIssuesForSprint(e,t){return this.issues.filter(s=>!s.getTimeoriginalestimate().isZero()&&s.isInSprint(e)&&s.wasUnfinishedOn(t,u.seconds))}}class K{constructor(e){this.loggedDates=[],this.loggedDatesRange=[],this.fistCreatedDate=f.now(),this.lastChangedDate=f.now(),this.fistLoggedDate=f.now(),this.lastLoggedDate=f.now(),this.issuesByCreatedOn=this.getIssuesByCreatedOn(e)}static from(e){return new K(e)}getIssuesCreatedSameOrAfter(e){return this.issuesByCreatedOn[e.date]||[]}getLoggedDates(){return this.loggedDates}getLoggedDatesRange(){return this.loggedDatesRange}getFirstCreatedDate(){return this.fistCreatedDate}getLastChangedDate(){return this.lastChangedDate}getIssuesByCreatedOn(e){return this.loggedDates=this.getLoggedDatesFor(e),this.fistCreatedDate=this.getFirstCreatedDateFor(e),this.lastChangedDate=this.getLastChangedDateFor(e),this.loggedDates.length?(this.fistLoggedDate=this.loggedDates[0],this.lastLoggedDate=this.loggedDates[this.loggedDates.length-1],this.loggedDatesRange=U(this.fistLoggedDate,this.lastLoggedDate),this.loggedDatesRange.reduce((t,s)=>(t[s.date]=this.filterCreatedSameDayOrBefore(e,s),t),{})):U(this.fistCreatedDate,this.lastChangedDate).reduce((t,s)=>(t[s.date]=this.filterCreatedSameDayOrBefore(e,s),t),{})}filterCreatedSameDayOrBefore(e,t){return e.filter(s=>s.createdSameDayOrBefore(t))}getLoggedDatesFor(e){const t=e.map(s=>{var r;return null===(r=g.getWorklogs(s))||void 0===r?void 0:r.map(a=>R(a.started).format("YYYY-MM-DD"))}).flat();return(0,T.uniq)(t).map(s=>f.from(s)).sort((s,r)=>s.compare(r))}getLastChangedDateFor(e){return e.map(t=>g.getHistories(t)).flat().map(t=>f.from(t.created.date)).sort((t,s)=>-t.compare(s)).find(Boolean)||this.getLastCreatedDateFor(e)}getFirstCreatedDateFor(e){return e.map(t=>t.getCreated()).sort((t,s)=>t.compare(s)).find(Boolean)}getLastCreatedDateFor(e){return e.map(t=>t.getCreated()).sort((t,s)=>-t.compare(s)).find(Boolean)}}class Y{constructor(e){this.tableData=[],this.issuesLongDevelopmentTime=this.getIssuesLongDevelopmentTimeChartData(e.getIssues()),this.issuesLongWaitingForTestingTime=this.getIssuesLongWaitingForTestingTimeChartData(e.getIssues()),this.issuesLongTestingTime=this.getIssuesLongTestingTimeChartData(e.getIssues()),this.bugFixIssues=this.getBugfixTimeChartData(e.getIssues()),this.tableData=e.getIssues().map(t=>L.from(t))}static from(e){return new Y(e)}getIssuesLongDevelopmentTimeChartData(e){return e.filter(t=>t.isDevelopmentTimeLong()).map(t=>L.from(t))}getIssuesLongWaitingForTestingTimeChartData(e){return e.filter(t=>t.isWaitingForTestingTimeLong()).map(t=>L.from(t))}getIssuesLongTestingTimeChartData(e){return e.filter(t=>t.isTestingTimeLong()).map(t=>L.from(t))}getBugfixTimeChartData(e){return e.filter(t=>t.isBugFix()).map(t=>L.from(t))}}function Z(i){return"["+i.map(e=>JSON.stringify(e)).join(",")+"]"}addEventListener("message",({data:i})=>{let e=new he(JSON.parse(i));const t=x.from(e.issues);let s=Y.from(t);const r=Z(s.issuesLongTestingTime),a=Z(s.issuesLongDevelopmentTime),o=Z(s.issuesLongWaitingForTestingTime),p=Z(s.bugFixIssues),S=Z(s.tableData);postMessage(`{\n      "issuesLongTestingTime": ${r},\n      "issuesLongDevelopmentTime": ${a},\n      "issuesLongWaitingForTestingTime": ${o},\n      "bugFixIssues": ${p},\n      "tableData": ${S}\n    }`)})}},$={};function y(m){var E=$[m];if(void 0!==E)return E.exports;var D=$[m]={id:m,loaded:!1,exports:{}};return J[m].call(D.exports,D,D.exports,y),D.loaded=!0,D.exports}y.m=J,y.x=()=>{var m=y.O(void 0,[456],()=>y(7635));return y.O(m)},m=[],y.O=(E,D,R,T)=>{if(!D){var h=1/0;for(u=0;u<m.length;u++){for(var[D,R,T]=m[u],f=!0,n=0;n<D.length;n++)(!1&T||h>=T)&&Object.keys(y.O).every(z=>y.O[z](D[n]))?D.splice(n--,1):(f=!1,T<h&&(h=T));if(f){m.splice(u--,1);var U=R();void 0!==U&&(E=U)}}return E}T=T||0;for(var u=m.length;u>0&&m[u-1][2]>T;u--)m[u]=m[u-1];m[u]=[D,R,T]},y.f={},y.e=m=>Promise.all(Object.keys(y.f).reduce((E,D)=>(y.f[D](m,E),E),[])),y.u=m=>m+".03205930c2b5ecd4.js",y.miniCssF=m=>{},y.o=(m,E)=>Object.prototype.hasOwnProperty.call(m,E),y.nmd=m=>(m.paths=[],m.children||(m.children=[]),m),(()=>{var m;y.tt=()=>(void 0===m&&(m={createScriptURL:E=>E},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(m=trustedTypes.createPolicy("angular#bundler",m))),m)})(),y.tu=m=>y.tt().createScriptURL(m),y.p="",(()=>{var m={635:1};y.f.i=(T,u)=>{m[T]||importScripts(y.tu(y.p+y.u(T)))};var D=self.webpackChunktime_reports=self.webpackChunktime_reports||[],R=D.push.bind(D);D.push=T=>{var[u,h,f]=T;for(var n in h)y.o(h,n)&&(y.m[n]=h[n]);for(f&&f(y);u.length;)m[u.pop()]=1;R(T)}})(),(()=>{var m=y.x;y.x=()=>y.e(456).then(m)})(),y.x()})();