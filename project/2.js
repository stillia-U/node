const nj = JSON.parse(document.getElementById("__NEXT_DATA__").innerText);
const description = prompt("어떤 내용을 엔이에 삽입🖤 하실건가요?");

fetch("https://playentry.org/graphql", {
    "headers": {
        "Content-Type": "application/json",
        "x-client-type": "Client",
        "CSRF-Token": nj.props.initialProps.csrfToken,
        "x-token": nj.props.initialState.common.user.xToken
    },
    "body": JSON.stringify({
        "query": "mutation CREATE_ENTRYSTORY(\n$content:String\n$text:String\n$image:String\n$sticker:ID\n$stickerItem:ID\n$cursor:String\n){\ncreateEntryStory(\ncontent:$content\ntext:$text\nimage:$image\nsticker:$sticker\nstickerItem:$stickerItem\ncursor:$cursor\n){\nwarning\ndiscuss{\nid\ntitle\ncontent\nseContent\ncreated\ncommentsLength\nlikesLength\nvisit\ncategory\nprefix\ngroupNotice\nuser{\nid\nnickname\nusername\nprofileImage{\nid\nname\nlabel{\nko\nen\nja\nvn\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nstatus{\nfollowing\nfollower\n}\ndescription\nrole\n}\nimages{\nfilename\nimageUrl\n}\nsticker{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\n\nwidth\nheight\n\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n\n}\nprogress\nthumbnail\nreply\nbestComment{\n\nid\nuser{\n\nid\nnickname\nusername\nprofileImage{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nstatus{\nfollowing\nfollower\n}\ndescription\nrole\n\n}\ncontent\ncreated\nremoved\nblamed\ncommentsLength\nlikesLength\nisLike\nhide\nimage{\n\nid\nname\nlabel{\n\nko\nen\nja\nvn\n\n}\nfilename\nimageType\ndimension{\n\nwidth\nheight\n\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n}\nsticker{\nid\nname\nlabel{\nko\nen\nja\nvn\n}\nfilename\nimageType\ndimension{\nwidth\nheight\n}\ntrimmed{\nfilename\nwidth\nheight\n}\n\n}\n\n}\nblamed\n\n}\n}\n}\n",
        "variables": {
            "content": description,
        }
    }),
    "method": "POST"
});