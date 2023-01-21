let id;
let link='과일집 바보';
let write = ['과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보', '과일집 바보'];
let writedata = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let projectlist = ['62ebdb2e94e4d10025b8eacb', '6301d671d1de6502129ae47a', '63031a048101a101d5c42614', '62d8aeb5b8d3f8040aebd410','1','1'];
const csrf = await fetch("https://playentry.org");
const body = await csrf.text();
const cookie = csrf.headers.get('set-cookie');
console.log(cookie);
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);


async function a() {await fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
     "CSRF-Token": `${csrfToken}`,
    "cookie": `${cookie}`
  },
  "body": `{\"query\":\"\\n    mutation CREATE_PROJECT(\\n        \\n    $name: String\\n    $speed: Int\\n    $objects: JSON\\n    $variables: JSON\\n    $messages: JSON\\n    $functions: JSON\\n    $tables: JSON\\n    $scenes: JSON\\n    $blockLog: JSON\\n    $lecture:ID\\n    $study:ID\\n    $discovery: ID\\n    $isForLecture:Boolean\\n    $isForStudy:Boolean\\n    $isForSubmit: Boolean\\n    $isPracticalCourse: Boolean\\n    $interface: JSON\\n    $aiUtilizeBlocks: JSON\\n    $expansionBlocks: JSON\\n    $hardwareLiteBlocks: JSON\\n    $description: String\\n    $description2: String\\n    $description3: String\\n    $thumb: String\\n    $isopen: Boolean\\n    $categoryCode: String\\n    $parent: ID\\n    $learning: String\\n\\n    ) {\\n        createProject(\\n            \\n    name: $name\\n    speed: $speed\\n    objects: $objects\\n    variables: $variables\\n    messages: $messages\\n    functions: $functions\\n    tables: $tables\\n    scenes: $scenes\\n    blockLog: $blockLog\\n    lecture: $lecture\\n    study: $study\\n    discovery: $discovery\\n    isForLecture: $isForLecture\\n    isForStudy: $isForStudy\\n    isForSubmit: $isForSubmit\\n    isPracticalCourse: $isPracticalCourse\\n    interface: $interface\\n    aiUtilizeBlocks: $aiUtilizeBlocks\\n    expansionBlocks: $expansionBlocks\\n    hardwareLiteBlocks: $hardwareLiteBlocks\\n    description: $description\\n    description2: $description2\\n    description3: $description3\\n    thumb: $thumb\\n    isopen: $isopen\\n    categoryCode: $categoryCode\\n    parent: $parent\\n    learning: $learning\\n\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"category\":\"기타\",\"scenes\":[{\"id\":\"7dwq\",\"name\":\"장면 1\"}],\"variables\":[{\"name\":\"초시계\",\"id\":\"brih\",\"visible\":false,\"value\":\"0\",\"variableType\":\"timer\",\"isCloud\":false,\"isRealTime\":false,\"cloudDate\":false,\"object\":null,\"x\":134,\"y\":-70},{\"name\":\" 대답 \",\"id\":\"1vu8\",\"visible\":false,\"value\":\"0\",\"variableType\":\"answer\",\"isCloud\":false,\"isRealTime\":false,\"cloudDate\":false,\"object\":null,\"x\":150,\"y\":-100}],\"objects\":[{\"id\":\"7y0y\",\"name\":\"엔트리봇\",\"script\":\"[[{\\\"id\\\":\\\"r0ka\\\",\\\"x\\\":50,\\\"y\\\":30,\\\"type\\\":\\\"when_run_button_click\\\",\\\"params\\\":[null],\\\"statements\\\":[],\\\"movable\\\":null,\\\"deletable\\\":1,\\\"emphasized\\\":false,\\\"readOnly\\\":null,\\\"copyable\\\":true,\\\"extensions\\\":[]},{\\\"id\\\":\\\"p7i3\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"type\\\":\\\"repeat_basic\\\",\\\"params\\\":[{\\\"id\\\":\\\"p4o0\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"type\\\":\\\"number\\\",\\\"params\\\":[10],\\\"statements\\\":[],\\\"movable\\\":null,\\\"deletable\\\":1,\\\"emphasized\\\":false,\\\"readOnly\\\":null,\\\"copyable\\\":true,\\\"extensions\\\":[]},null],\\\"statements\\\":[[{\\\"id\\\":\\\"9h26\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"type\\\":\\\"move_direction\\\",\\\"params\\\":[{\\\"id\\\":\\\"389z\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"type\\\":\\\"number\\\",\\\"params\\\":[10],\\\"statements\\\":[],\\\"movable\\\":null,\\\"deletable\\\":1,\\\"emphasized\\\":false,\\\"readOnly\\\":null,\\\"copyable\\\":true,\\\"extensions\\\":[]},null],\\\"statements\\\":[],\\\"movable\\\":null,\\\"deletable\\\":1,\\\"emphasized\\\":false,\\\"readOnly\\\":null,\\\"copyable\\\":true,\\\"extensions\\\":[]}]],\\\"movable\\\":null,\\\"deletable\\\":1,\\\"emphasized\\\":false,\\\"readOnly\\\":null,\\\"copyable\\\":true,\\\"extensions\\\":[]}]]\",\"objectType\":\"sprite\",\"rotateMethod\":\"free\",\"scene\":\"7dwq\",\"sprite\":{\"pictures\":[{\"id\":\"vx80\",\"dimension\":{\"width\":284,\"height\":350},\"fileurl\":\"/lib/entry-js/images/media/entrybot1.png\",\"name\":\"엔트리봇_걷기1\",\"scale\":100,\"imageType\":\"png\"},{\"id\":\"4t48\",\"dimension\":{\"width\":284,\"height\":350},\"fileurl\":\"/lib/entry-js/images/media/entrybot2.png\",\"name\":\"엔트리봇_걷기2\",\"scale\":100,\"imageType\":\"png\"}],\"sounds\":[{\"duration\":1.3,\"ext\":\".mp3\",\"id\":\"8el5\",\"fileurl\":\"/lib/entry-js/images/media/bark.mp3\",\"name\":\"강아지 짖는 소리\"}]},\"selectedPictureId\":\"vx80\",\"lock\":false,\"entity\":{\"x\":0,\"y\":0,\"regX\":142,\"regY\":175,\"scaleX\":0.3154574132492113,\"scaleY\":0.3154574132492113,\"rotation\":0,\"direction\":90,\"width\":284,\"height\":350,\"font\":\"undefinedpx \",\"visible\":true}}],\"expansionBlocks\":[],\"aiUtilizeBlocks\":[],\"speed\":60,\"name\":\" ${link}\",\"likeCnt\":0,\"visit\":0,\"isopen\":false,\"user\":\"61a74d65c289fb156b0caf78\",\"messages\":[],\"functions\":[],\"tables\":[],\"interface\":{\"canvasWidth\":478,\"menuWidth\":280,\"object\":\"7y0y\"},\"hardwareLiteBlocks\":[],\"externalModules\":[],\"externalModulesLite\":[],\"isPracticalCourse\":false,\"blockLog\":{\"categories\":[\"event\",\"repeat\",\"walk\"],\"when_run_button_click\":1,\"repeat_basic\":1,\"number\":2,\"move_direction\":1}}}`,
  "method": "POST"
}).then(r=>r.json()).then(r=>{console.log(r);id=r});
console.log(id.data.createProject.result.id);
await fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
    "CSRF-Token": `${csrfToken}`,
    "cookie": `${cookie}`
  },
  "body": `{\"query\":\"\\n    mutation TOGGLE_ISOPEN_PROJECT($id: ID!) {\\n        toggleIsopenProject(id: $id) {\\n            status\\n            result\\n        }\\n    }\\n\",\"variables\":{\"id\":\"${id.data.createProject.result.id}\"}}`,
  "method": "POST"
});
await fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
    "CSRF-Token": `${csrfToken}`,
    "cookie": `${cookie}`
  },
  "body": `{\"query\":\"\\n    mutation UPDATE_PROJECT(\\n        \\n    $id: ID!\\n    $name: String\\n    $speed: Int\\n    $objects: JSON\\n    $variables: JSON\\n    $messages: JSON\\n    $functions: JSON\\n    $tables: JSON\\n    $scenes: JSON\\n    $blockLog: JSON\\n    $interface: JSON\\n    $aiUtilizeBlocks: JSON\\n    $expansionBlocks: JSON\\n    $hardwareLiteBlocks: JSON\\n    $thumb: String\\n    $categoryCode: String\\n    $description: String\\n    $description2: String\\n    $description3: String\\n    $isopen: Boolean\\n    $isPracticalCourse: Boolean\\n    $group: ID\\n    $learning: String\\n\\n    ) {\\n        updateProject(\\n            \\n    id: $id\\n    name: $name\\n    speed: $speed\\n    objects: $objects\\n    variables: $variables\\n    messages: $messages\\n    functions: $functions\\n    tables: $tables\\n    scenes: $scenes\\n    blockLog: $blockLog\\n    interface: $interface\\n    aiUtilizeBlocks: $aiUtilizeBlocks\\n    expansionBlocks: $expansionBlocks\\n    hardwareLiteBlocks: $hardwareLiteBlocks\\n    thumb: $thumb\\n    categoryCode: $categoryCode\\n    description: $description\\n    description2: $description2\\n    description3: $description3\\n    isopen: $isopen\\n    isPracticalCourse: $isPracticalCourse\\n    group: $group\\n    learning: $learning\\n\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"id\":\"${id.data.createProject.result.id}\",\"name\":\"${writedata}\",\"categoryCode\":\"\",\"description\":\"와 진짜 레전드네요 ㄷㄷ -> ${link}\",\"description2\":\"\",\"description3\":\"\",\"isopen\":true}}`,
  "method": "POST"
});
}
async function b() {
  writedata = 100;
  fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
    "CSRF-Token": `${csrfToken}`,
    "cookie": `${cookie}`
  },
  "body": `{\"query\":\"\\n    mutation CREATE_ENTRYSTORY(\\n        \\n    $content: String\\n    $text: String\\n    $image: String\\n    $sticker: String\\n    $cursor: String\\n\\n    ) {\\n        createEntryStory(\\n            \\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n\\n        ) {\\n            warning\\n            discuss{\\n                \\n    id\\n    title\\n    content\\n    seContent\\n    created\\n    commentsLength\\n    likesLength\\n    visit\\n    category\\n    prefix\\n    groupNotice\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    images {\\n        filename\\n        imageUrl\\n    }\\n    progress\\n    thumbnail\\n    reply\\n    bestComment {\\n        \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n    }\\n    blamed\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"${writedata} ${link}\"}}`,
  "method": "POST"
});
}
async function maxdobae() {
    for(let i = 0; i < 10; i++)
    {
        a();
        b();
    }
}
setInterval(maxdobae(), 601000);

for(let i=0;i<10;i++){
projectlist.forEach(d=> {
  console.log(d);
  writedata = 100;
  fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
    "CSRF-Token": `${csrfToken}`,
    "cookie": `${cookie}`
  },
  "body": `{\"query\":\"\\n    mutation CREATE_COMMENT(\\n        \\n    $content: String\\n    $image: String\\n    $sticker: String\\n    $target: String\\n    $targetSubject: String\\n    $targetType: String\\n    $groupId: ID\\n\\n    ) {\\n        createComment(\\n            \\n    content: $content\\n    image: $image\\n    sticker: $sticker\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n\\n        ) {\\n            warning\\n            comment {\\n                \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"${writedata} ${link}\",\"target\":\"${d}\",\"targetSubject\":\"project\",\"targetType\":\"individual\"}}`,
  "method": "POST",
});
})}