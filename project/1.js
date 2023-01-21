// TODO imgFileCompress -> rest/picture 500뜸
// TODO 위 사항 -> blob 시스템 변경

(async function(){
    var getIdeal = function(){
        var next_data = document.getElementById("__NEXT_DATA__");
        var nj = JSON.parse(next_data.innerText);
        return {csrf: nj.props.initialProps.csrfToken, xtoken: nj.props.initialState.common.user.xToken};
    };

    var imgFileCompress = function(file){
        return new Promise(function(res, rej){
            var image = new Image();
            image.onload = function(event) {
                const maxN = 2400;
                const width = image.width, height = image.height;
                const scaleRatio = width > height ? maxN / width : maxN / height;
                var canvas = document.createElement("canvas");
                canvas.width = width * scaleRatio; canvas.height = height * scaleRatio;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                var dataURI = canvas.toDataURL("image/png");
                const splitDataURI = dataURI.split(',');
                const byteString = window.atob(splitDataURI[1]);

                const ia = new Uint8Array(byteString.length);
                for (let i = 0; i < byteString.length; i++){
                    ia[i] = byteString.charCodeAt(i);
                }
                res(new Blob([ia], { type: "image/png" }));
            };
            image.src = globalThis.URL.createObjectURL(file);
        });
    };

    var load = function(){
        return new Promise(function(res, rej){
            let input = document.createElement("input");
            input.type = "file";
            input.onchange = ()=>{
                const file = input.files[0];

                const fileSizeKB = file.size >> 10;
                if (fileSizeKB >= 1024) {
                    if(alert("파일 크기가 너무 큽니다."), false){ // if(confirm ("파일 크기가 너무 큽니다. 압축할까요?")){
                        imgFileCompress(file).then(function(blob){
                            let fd = new FormData();
                            fd.append("file", blob);
                            fd.append("type", "notcompress");
                            fetch("https://playentry.org/rest/picture", { method : "POST",body : fd}).then(r=>r.json()).then(j=>{
                                res(j._id);
                                input.remove();
                            });
                        });
                        return;
                    } else {
                        // alert("취소되었습니다.");
                        rej();
                    }
                }

                let fd = new FormData();
                fd.append("file", input.files[0]);
                fd.append("type", "notcompress");
                fetch("https://playentry.org/rest/picture", { method : "POST",body : fd}).then(r=>r.json()).then(j=>{
                    res(j._id);
                    input.remove();
                });
            }
            document.body.append(input);
            input.style.display = "none";
            var h2 = document.querySelector("h2"), n;
            if(h2){
                n = h2.innerText;
                h2.innerText = "화면을 클릭해주세요.";
                h2.style.textDecoration = "underline";
            }
            console.log("<- 페이지 화면을 아무데나 클릭하세요");
            var f = function(){
                if(h2){
                    h2.innerText = n;
                    h2.style.textDecoration = "";
                }
                input.click();
                document.body.removeEventListener("click", f);
            };
            document.body.addEventListener("click", f);
            alert("화면 밖을 클릭해주세요.");
        });
    };
    var wait = function(t){
        return new Promise(function(s, j){
            setTimeout(function(){s();}, t);
        });
    };
    if(!location.href.includes("entrystory")){}
    var cont = prompt("메시지를 입력해주세요", "테스트");
    if (!cont) {
        alert("취소되었습니다.");
        return;
    }
    var wrt = document.getElementById("Write");
    if(wrt) {wrt.value = cont;}
    await wait(100);
    var useID = confirm("이미지 파일을 올릴까요? (이미지 아이디가 있다면 취소를 누르세요)");
    var id = "";
    if (useID) {
        try {
            id = await load();
        } catch {
            return;
        }
    } else {
        id = prompt("가지고 계신 이미지 아이디를 입력해주세요", "620a144b6e708500aab68294");
        if (!id) {
            alert("취소되었습니다.");
            return;
        }
    }
    var idl = getIdeal();
    var csrf = idl.csrf, xtoken = idl.xtoken;
    var crt = await (async function(cont, id){
        var crt = await fetch("https://playentry.org/graphql", {
            "headers": {
                "Content-Type": "application/json",
                "x-client-type": "Client",
                "CSRF-Token": csrf,
                "x-token": xtoken
            },
            "body": JSON.stringify({
                "query": "mutation CREATE_ENTRYSTORY(\n$content:String\n$text:String\n$image:String\n$sticker:ID\n$stickerItem:ID\n$cursor:String\n){\ncreateEntryStory(\ncontent:$content\ntext:$text\nimage:$image\nsticker:$sticker\nstickerItem:$stickerItem\ncursor:$cursor\n){\nwarning\ndiscuss{\nid\ntitle\ncontent\nseContent\ncreated\ncommentsLength\nlikesLength\nvisit\ncategory\nprefix\ngroupNotice\nuser{\nid\nnickname\nusername\nprofileImage{\nid\nname\nlabel{\nko\nen\nja\nvn\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nstatus{\nfollowing\nfollower\n}\ndescription\nrole\n}\nimages{\nfilename\nimageUrl\n}\nsticker{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\n\nwidth\nheight\n\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n\n}\nprogress\nthumbnail\nreply\nbestComment{\n\nid\nuser{\n\nid\nnickname\nusername\nprofileImage{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nstatus{\nfollowing\nfollower\n}\ndescription\nrole\n\n}\ncontent\ncreated\nremoved\nblamed\ncommentsLength\nlikesLength\nisLike\nhide\nimage{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\n\nwidth\nheight\n\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nsticker{\nid\nname\nlabel{\nko\nen\nja\nvn\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n\n}\n\n}\nblamed\n\n}\n}\n}\n",
                "variables": {
                    "content": cont,
                    "image": id
                }
            }),
            "method": "POST"
        });
        return await crt.json();
    })(cont, id);

    if(confirm("업로드가 끝났습니다. 새로고침하실래요?")){
        location.replace("https://playentry.org/community/entrystory/list");
    }
})();
