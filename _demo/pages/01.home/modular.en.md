---
title: Home
media_order: 'z.jpg,rost.jpg,ban.jpg,ben.jpg,nag.jpg,pri.jpg,gtn.jpg,stb.jpg,vo.jpg,telegram.svg,vk.svg'
description: 'Reqweb - Home page'
sideon: true
content:
    items: '@self.modular'
form:
    name: contact-form
    fields:
        -
            name: name
            placeholder: 'Ваше имя'
            type: text
            validate:
                required: true
        -
            name: email
            placeholder: 'Ваш email'
            type: text
            validate:
                required: true
        -
            name: message
            placeholder: 'Ваше сообщение'
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: ОТПРАВИТЬ
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: '{{ config.plugins.email.to }}'
                subject: 'REQWEB - {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            display: thankyou
---

