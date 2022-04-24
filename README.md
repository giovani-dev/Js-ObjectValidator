# Js-ObjectValidator

- <b>Exemplos</b>
    <br>
    1. Antes de criar um schema para uma validacao, voce deve cirar um tipo que define a sua estrutura de dados.
    2. Apos criar o tipo da sua estrutura de dados, o schema sera definido atraves de uma classe concreta que herda da classe abstrata 'Field'.
    3. Em seguida voce podera validar qualquer dado, desde que siga o padrao definido no schema.
    <br><br>
    - <b>Validando um objeto</b>
        <br>
        1. Imports
        ```typescript
        import FieldInteger from "./src/field/integer"
        import StringField from "./src/field/string"
        import JsonField from "./src/field/JsonField"
        import ListField from "./src/field/list"
        ```
        <br>

        2. Definindo a estrutura de dados.
        ```typescript
        type templateEndereco = {
            cep: StringField
        }

        type templateType = {
            endereco: JsonField<templateEndereco>,
            permissions: ListField
        }
        ```
        <br>
        
        3. Criando Schema.
        ```typescript
        let validateObject = new JsonField<templateType>({
            endereco: new JsonField<templateEndereco>({
                cep: new StringField({
                    maxLength: 256,
                    minLength: 1,
                    isRequired: true
                })
            }),
            permissions: new ListField({
                isRequired: true,
                contentType: new FieldInteger({
                    minLength: 1,
                    isRequired: true
                })
            })
        });
        ```
        <br>

        4. Validando seus dados.
        ```typescript
        validateObject.isValid({
            endereco: {
                cep: "88351-001",
                numero: 500
            },
            name: "Giovani Liskoski Zanini",
            email: "giovanilzanini@hotmail.com",
            password: "123456",
            permissions: [1, 2, 3, 4, 5, 6, 1]
        });
        ```
        <br><br>
    - <b>Validando uma lista de objetos</b>
        <br>
        1. Imports
        ```typescript
        import FieldInteger from "./src/field/integer"
        import StringField from "./src/field/string"
        import JsonField from "./src/field/JsonField"
        import ListField from "./src/field/list"
        ```
        <br>

        2. Definindo a estrutura de dados.
        ```typescript
        type templateEndereco = {
            cep: StringField
        }

        type templateType = {
            endereco: JsonField<templateEndereco>,
            permissions: ListField
        }
        ```
        <br>

        3. Criando Schema.
        ```typescript
        let validateList = new ListField({
            isRequired: true,
            contentType: new JsonField<templateType>({
                endereco: new JsonField<templateEndereco>({
                    cep: new StringField({
                        maxLength: 256,
                        minLength: 1,
                        isRequired: true
                    })
                }),
                permissions: new ListField({
                    isRequired: true,
                    contentType: new FieldInteger({
                        minLength: 1,
                        isRequired: true
                    })
                })
            })
        });
        ```
        <br>

        4. Validando seus dados.
        ```typescript
        validateList.isValid([
            {
                endereco: {
                    cep: "11111-001"
                },
                permissions: [1, 2, 3, 4, 5, 6, 1]
            },{
                endereco: {
                    cep: "11111-002"
                },
                permissions: [6, 1]
            }
        ]);
        ```