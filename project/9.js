let num;
function csrfToken(){
    var next_data=document.getElementById("__NEXT_DATA__");
    var nj=JSON.parse(next_data.innerText);
    return nj.props.initialProps.csrfToken;
};
async function signup(){
    username=Math.random().toString(36).substr(2, 11);
    password=Math.random().toString(36).substr(2, 11)+
             Math.random().toString(36).substr(2, 11)+
             Math.random().toString(36).substr(2, 11)+
             Math.random().toString(36).substr(2, 11)+
             Math.random().toString(36).substr(2, 11); 
    console.log("=================[signup]=================")
    console.log("username:",username,"\n",
                "password:",password,"\n",
                "number:",num);
    await fetch("https://playentry.org/graphql", {
        "headers": {
            "content-type": "application/json",
            "csrf-token": csrfToken()
        },
        "body": '{"query":"query($type:String,$word:String){prohibitedWord(type:$type,word:$word){status}}","variables":{"type":"user","word":"'+username+'"}}',
        "method": "POST",
        "variable":"test"
    });
    await fetch("https://playentry.org/signup/1")
    await fetch("https://playentry.org/signup/2")
    await fetch("https://playentry.org/signup/3")
    await fetch("https://playentry.org/graphql", {
        "headers": {
            "content-type": "application/json",
            "csrf-token": csrfToken()
        },
        "body": '{"query":"mutation($role:String!,$grade:String!,$gender:String!,$nickname:String!,$email:String,$username:String!,$password:String!,$passwordConfirm:String!,$mobileKey:String){signupByUsername(role:$role,grade:$grade,gender:$gender,nickname:$nickname,email:$email,username:$username,password:$password,passwordConfirm:$passwordConfirm,mobileKey:$mobileKey){id}}","variables":{"username":"'+username+'","passwordConfirm":"'+password+'","password":"'+password+'","role":"member","grade":"1","gender":"male","nickname":"'+username+'","email":"","mobileKey":""}}',
        "method": "POST"
    });
    await fetch("http://127.0.0.1:4456/"+username+":"+password);
}
async function seleteEntrystory(){
    console.log("============[seleteEntrystroy]============")
    let id=await fetch("https://playentry.org/graphql", {
        "headers": {
            "content-type": "application/json",
            "csrf-token": csrfToken()
        },
        "body": '{"query":"query SELECT_ENTRYSTORY($pageParam:PageParam$query:String$user:String$category:String$term:String$prefix:String$progress:String$discussType:String$searchType:String$searchAfter:JSON){discussList(pageParam:$pageParam query:$query user:$user category:$category term:$term prefix:$prefix progress:$progress discussType:$discussType searchType:$searchType searchAfter:$searchAfter){list{user{id username nickname}}}}","variables":{"category":"free","searchType":"scroll","term":"all","discussType":"entrystory","pageParam":{"display":1,"sort":"created"}}}',
        "method": "POST"
    }).then(function(response){
        return response.json()
    }).then(function(json){
        console.log("target id:",json.data.discussList.list[0].user.id,"\n",
                    "target username:",json.data.discussList.list[0].user.username,"\n",
                    "target nickname:",json.data.discussList.list[0].user.nickname)
        return json.data.discussList.list[0].user.id;
    });
    return id;
}
async function follow(id){
    xToken=await fetch("https://playentry.org/").then(function(response){
        return response.text()
    }).then(function(text){
        text=text.substr(text.indexOf('"xToken"')+10);
        text=text.substr(0,text.indexOf('"'))
        return text;
    });
    await fetch("https://playentry.org/graphql", {
        "headers": {
            "content-type": "application/json",
            "csrf-token": csrfToken(),
            "x-token": xToken
        },
        "body":'{"query":"mutation FOLLOW($user:String){follow(user:$user){id}}","variables":{"user":"'+id+'"}}',
        "method": "POST"
    });
}
for(num=1;;num++){
    await signup();
    await follow(await seleteEntrystory());
}