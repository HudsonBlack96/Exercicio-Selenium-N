import{ Builder,By, Key} from "selenium-webdriver"
import {should} from "chai";
should()

async function adicionarTarefa () {
   
    //Abrir o navegador
    let driver = await new Builder ().forBrowser("firefox").build();

    //Navegar até o site
    await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

    //Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender selenium",Key.RETURN)

    //Assertion / Validação
    let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText()
    .then(function(value){
        return value
    
    
    });

    seleniumText.should.equal("Aprender selenium")

    // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender Inglês", Key.RETURN)

    // Assertion / Validação
    let seleniumText2 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){
    return value
    });

    seleniumText2.should.equal(seleniumText2,"Aprender Inglês");

        // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Francês", Key.RETURN)

        // Assertion / Validação
        let seleniumText3 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
        .then(function(value){
        return value
        });
    
        seleniumText3.should.equal(seleniumText3,"Aprender Francês");

            // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("ir para a Igreja", Key.RETURN)

    // Assertion / Validação
    let seleniumText4 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){
    return value
    });

    seleniumText4.should.equal(seleniumText4,"ir para a Igreja");

        // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Morar no Canadá", Key.RETURN)

        // Assertion / Validação
        let seleniumText5 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
        .then(function(value){
        return value
        });
    
        seleniumText5.should.equal(seleniumText5,"Morar no Canadá");
            // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("Comprar uma Casa", Key.RETURN)

    // Assertion / Validação
    let seleniumText6 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){
    return value
    });

    seleniumText6.should.equal(seleniumText6,"Comprar uma Casa");

        // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Comprar o Carro do Sonho", Key.RETURN)

        // Assertion / Validação
        let seleniumText7 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
        .then(function(value){
        return value
        });
    
        seleniumText7.should.equal(seleniumText7,"Comprar o Carro do Sonho");

            // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("Visitar a Familia", Key.RETURN)

    // Assertion / Validação
    let seleniumText8 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
    .then(function(value){
    return value
    });

    seleniumText8.should.equal(seleniumText8,"Visitar a Familia");

        // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Conhecer novos Paises", Key.RETURN)

        // Assertion / Validação
        let seleniumText9 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
        .then(function(value){
        return value
        });
    
        seleniumText9.should.equal(seleniumText9,"Conhecer novos Paises");
        
        // Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Melhorar Status Financeiro", Key.RETURN)

        // Assertion / Validação
        let seleniumText10 = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText()
        .then(function(value){
        return value
        });
    
        seleniumText10.should.equal(seleniumText10,"Melhorar Status Financeiro");

    await driver.sleep(3000);


    //fechar o navegador
    await driver.quit()


}

adicionarTarefa()