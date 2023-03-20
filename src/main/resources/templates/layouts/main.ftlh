<#macro page role>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet"
            type="text/css" />
        <#if data.cssLibrary??>
            <#list data.cssLibrary as css>
                <link rel="stylesheet" href="${css}">
            </#list>
        </#if>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/header.css">
        <#if data.css??>
            <link rel="stylesheet" href="/css/${data.css}">
        </#if>
    </head>

    <body>
        <#include "../partials/header.ftlh" />

        <div class="body">
            <#switch role>
                <#case "admin">
                <#include "../partials/admin-navbar.ftlh">
                <#break>

                <#case "enterprise">
                <#include "../partials/enterprise-navbar.ftlh">
                <#break>

                <#case "user">
                <#include "../partials/user-navbar.ftlh">
                <#break>
            </#switch>

            <div class="main-container">
                <main>
                    <#nested />
                </main>
            </div>
        </div>

        <#if data.jsLibrary??>
            <#list data.jsLibrary as js>
                <script src="${js}"></script>
            </#list>
        </#if>

        <script src="/js/header.js"></script>
        <script src="/js/main.js"></script>

        <#if data.js??>
            <script src="/js/${data.js}"></script>
        </#if>
    </body>

    </html>
</#macro>