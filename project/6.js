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
        "query": `
            mutation CREATE_ENTRYSTORY(\n
                    $content:String\n$text:String\n
                    $image:String\n
                    $sticker:ID\n
                    $stickerItem:ID\n
                    $cursor:String\n
                ){\n
                    createEntryStory(\n
                        content:$content\n
                        text:$text\n
                        image:$image\n
                        sticker:$sticker\n
                        stickerItem:$stickerItem\n
                        cursor:$cursor\n
                    ){\n
                        warning\n
                        discuss{\n
                            id\n
                            title\n
                            content\n
                            seContent\n
                            created\n
                            commentsLength\n
                            likesLength\n
                            visit\n
                            category\n
                            prefix\n
                            groupNotice\n
                            user{\n
                                id\n
                                nickname\n
                                username\n
                                profileImage{\n
                                    id\n
                                    name\n
                                    label{\n
                                        ko\n
                                        en\n
                                        ja\n
                                        vn\n
                                    }\n
                                    filename\n
                                    imageType\n
                                    dimension{\n
                                        width\n
                                        height\n
                                    }\n
                                    trimmed{\n
                                        filename\n
                                        width\n
                                        height\n
                                    }\n
                                }\n
                                status{\n
                                    following\n
                                    follower\n
                                }\n
                                description\n
                                role\n
                            }\n
                            images{\n
                                filename\n
                                imageUrl\n
                            }\n
                            sticker{\n\n
                                id\n
                                name\n
                                label{\n\n
                                    ko\n
                                    en\n
                                    ja\n
                                    vn\n\n
                                }\n
                                filename\n
                                imageType\n
                                dimension{\n\n
                                    width\n
                                    height\n\n
                                }\n
                                trimmed{\n
                                    filename\n
                                    width\n
                                    height\n
                                }\n\n
                            }\n
                            progress\n
                            thumbnail\n
                            reply\n
                            bestComment{\n
                                \n
                                id\n
                                user{\n\n
                                    id\n
                                    nickname\n
                                    username\n
                                    profileImage{\n\n
                                        id\n
                                        name\n
                                        label{\n\n
                                            ko\n
                                            en\n
                                            ja\n
                                            vn\n\n
                                        }\n
                                        filename\n
                                        imageType\n
                                        dimension{\n
                                            width\n
                                            height\n
                                        }\n
                                        trimmed{\n
                                            filename\n
                                            width\n
                                            height\n
                                        }\n
                                    }\n
                                    status{\n
                                        following\n
                                        follower\n
                                    }\n
                                    description\n
                                    role\n\n
                                }\n
                                content\n
                                created\n
                                removed\n
                                blamed\n
                                commentsLength\n
                                likesLength\n
                                isLike\n
                                hide\n
                                image{\n\n
                                    id\n
                                    name\n
                                    label{\n\n
                                        ko\n
                                        en\n
                                        ja\n
                                        vn\n\n
                                    }\n
                                    filename\n
                                    imageType\n
                                    dimension{\n\n
                                        width\n
                                        height\n\n
                                    }\n
                                    trimmed{\n
                                        filename\n
                                        width\n
                                        height\n
                                    }\n
                                }\n
                                sticker{\n
                                    id\n
                                    name\n
                                    label{\n
                                        ko\n
                                        en\n
                                        ja\n
                                        vn\n
                                    }\n
                                    filename\n
                                    imageType\n
                                    dimension{\n
                                        width\n
                                        height\n
                                    }\n
                                    trimmed{\n
                                        filename\n
                                        width\n
                                        height\n
                                    }\n\n
                                }\n\n
                            }\n
                            blamed\n\n
                        }\n
                    }\n
                }\n
            `,
        "variables": {
            "content": description,
        }
    }),
    "method": "POST"
});