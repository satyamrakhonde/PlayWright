// import React, { Component } from 'react'

import { Page } from "@playwright/test";

export default class RegisterPage {

    constructor(public page: Page){
        
    }
    async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname").type(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator("input[name='lastname']").type(lastname);
    }

    async enterEmail(email: string){
        await this.page.locator("input[name='email']").type(email);
    }

    async enterTelephone(telephone: string){
        await this.page.locator("input[name='telephone']").type(telephone);
    }
}
