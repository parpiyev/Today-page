export default {
    openapi: "3.0.3",
    info: {
        title: "Today-page APP API",
        description: "Today-page APP API Documentation",
        version: "1.0.0",
        contact: {
            name: "Muhammadqodir"
        }
    },
    component: {
        securitySchemes: {
            JWT: {
                type: "apiKey",
                description: "JWT authorization of an API",
                name: "Authorization",
                in: "header"
            }
        }
    },
    tags: [
        "Login and Registration",
        "Souces",
        "Drinks",
        "Snacks",
        "Locations",
        "Foods",
        "Categories",
        "Order"
    ],
    components: {
        securitySchemes: {
            JWT: {
                type: "apiKey",
                description: "JWT authorization of an API",
                name: "Authorization",
                in: "header"
            }
        },
        schemas: {
            "common-error": {
                type: "object",
                properties: {
                    success: {
                        type: "boolean",
                        default: false
                    },
                    message: {
                        type: "string"
                    }
                }
            }
        },
        examples: {
            "token-not-found": {
                value: {
                    success: false,
                    message: "Token not found!"
                }
            },
            "token-is-invalid": {
                value: {
                    success: false,
                    message: "Token is invalid!"
                }
            },
            "souce-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of souce"
                }
            },
            "drink-not-found": {
                value: {
                    success: false,
                    message: "You you do not have permission to this operation!"
                }
            },
            "snack-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of snack"
                }
            },
            "user-not-found": {
                value: {
                    success: false,
                    message: "User not found"
                }
            },
            "gio-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of location"
                }
            },
            "food-not-found": {
                value: {
                    success: false,
                    message: "There is no such kind of food"
                }
            }
        },
        responses: {
            "auth-token-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-souce-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "souce-not-found": {
                                $ref: "#/components/examples/souce-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-drink-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "drink-not-found": {
                                $ref: "#/components/examples/drink-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-not-invalid": {
                description: "Invalid Token",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-is-invalid": {
                                $ref: "#/components/examples/token-is-invalid"
                            }
                        }
                    }
                }
            },
            "auth-token-snacks-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "snack-not-found": {
                                $ref: "#/components/examples/snack-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-gio-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "gio-not-found": {
                                $ref: "#/components/examples/gio-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            },
            "auth-token-foods-not-found": {
                description: "Not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/common-error"
                        },
                        examples: {
                            "token-not-found": {
                                $ref: "#/components/examples/token-not-found"
                            },
                            "food-not-found": {
                                $ref: "#/components/examples/food-not-found"
                            },
                            "user-not-found": {
                                $ref: "#/components/examples/user-not-found"
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ["**/*Route.js"],
    paths: {
        "/user": {
            post: {
                tags: ["Login and Registration"],
                summary: "Registration",
                parameters: [
                    {
                        in: "query",
                        name: "first_name",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "last_name",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "photo",
                        required: true,
                        schema: {
                            type: "array"
                        }
                    },
                    {
                        in: "query",
                        name: "age",
                        required: true,
                        schema: {
                            type: "number"
                        }
                    },
                    {
                        in: "query",
                        name: "job_position",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "gender",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "user_name",
                        required: true,
                        unique: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "email",
                        required: true,
                        unique: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "password",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "role",
                        required: true,
                        schema: {
                            type: "string 'adim || user'"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwMTQ4YzcyYTkxMGI2NjllNGU4MlAiLCJpYXQiOjE2MjUyOTgwNjJ9.RE201leEGdwnBWmOt8ARL1IgnHdNIJNT3-mHqwy1Gg4"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "User already exist"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/login": {
            post: {
                tags: ["Login and Registration"],
                summary: "Login",
                parameters: [
                    {
                        in: "query",
                        name: "user_name",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "password",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGUwMTQ4YzcyYTkxMGI2NjllNGU4MlAiLCJpYXQiOjE2MjUyOTgwNjJ9.RE001leEGdwnBWmOt8ARL1IgnHdNIJNT3-mHqwy1Gg4"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "Passsword is incorrect!"
                                    }
                                }
                            }
                        }
                    },
                    "403": {
                        description: "Forbidden",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "Db object is not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/time-stamp": {
            post: {
                tags: ["Login and Registration"],
                summary: "Registration",
                parameters: [
                    {
                        in: "query",
                        name: "tasklist",
                        schema: {
                            type: "array"
                        }
                    },
                    {
                        in: "query",
                        name: "accomplished_tasks_count",
                        schema: {
                            type: "number"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        timeStamp: "{timeStamp}"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "nima error bersa shu haqida malumot kiladi"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/absence": {
            post: {
                tags: ["Login and Registration"],
                summary: "Registration",
                parameters: [
                    {
                        in: "query",
                        name: "reason",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        timeStamp: "{timeStamp}"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        description: "Bad request",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: {
                                            type: "boolean"
                                        },
                                        message: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        success: false,
                                        message: "nima error bersa shu haqida malumot kiladi"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/user ": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                summary: "Get all user",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [
                                                {
                                                    type: "object",
                                                    properties: {
                                                        photo: {
                                                            type: "array",
                                                            default: [
                                                                {
                                                                    type: "string"
                                                                }
                                                            ]
                                                        },
                                                        _id: {
                                                            type: "string"
                                                        },
                                                        first_name: {
                                                            type: "string"
                                                        },
                                                        last_name: {
                                                            type: "string"
                                                        },
                                                        age: {
                                                            type: "number"
                                                        },
                                                        job_position: {
                                                            type: "string"
                                                        },
                                                        gender: {
                                                            type: "string"
                                                        },
                                                        email: {
                                                            type: "string"
                                                        },
                                                        password: {
                                                            type: "string"
                                                        },
                                                        role: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    example: {
                                        succes: true,
                                        data: [
                                            {
                                                photo: ["/api/file/photo-1629292077838.png"],
                                                _id: "d7fc0dc6-c9ac-4e09-8af9-2c89321d607f",
                                                role: {
                                                    name: "admin",
                                                    operations: [
                                                        "adminGet",
                                                        "adminCreate",
                                                        "adminUpdate",
                                                        "adminDelete",
                                                        "userGet",
                                                        "userCreate",
                                                        "userUpdate",
                                                        "userDelete"
                                                    ]
                                                },
                                                first_name: "Muhammadqodir",
                                                last_naem: "Parpiyev",
                                                age: 21,
                                                job_position: "Back-end",
                                                gender: "Erkak",
                                                user_name: "muhammadqodir",
                                                email: "parpiyev111@gmail.com",
                                                password:
                                                    "$2b$10$c87P6zXV3jFbBkckYuSr/.TkQuWemxfab7Gm5BFnEBsFLom.HQBPK"
                                            },
                                            {
                                                photo: ["/api/file/photo-1629304021956.png"],
                                                _id: "11c02e4a-433a-4bba-b31b-da2d96aebc98",
                                                role: {
                                                    name: "user",
                                                    operations: [
                                                        "userGet",
                                                        "userCreate",
                                                        "userUpdate",
                                                        "userDelete"
                                                    ]
                                                },
                                                first_name: "Muhammadqodir",
                                                last_naem: "Parpiyev",
                                                age: 21,
                                                job_position: "Back-end",
                                                gender: "Erkak",
                                                user_name: "parpiyev",
                                                email: "mparpiyev4@gmail.com",
                                                password:
                                                    "$2b$10$jFNHPyQykSbIsV1XXvtK9OHbwL6Qi4y0N7qa/1EhBWM7VaiLEz6zW"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/time-stamp ": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                summary: "Get all time-stamp",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [
                                                {
                                                    type: "object",
                                                    properties: {
                                                        _id: {
                                                            type: "string"
                                                        },
                                                        came_at: {
                                                            type: "data"
                                                        },
                                                        gone_at: {
                                                            type: "data"
                                                        },
                                                        tasklist: {
                                                            type: "array"
                                                        },
                                                        accomplished_tasks_count: {
                                                            type: "number"
                                                        },
                                                        planned_tasks_count: {
                                                            type: "number"
                                                        },
                                                        employee_id: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    example: {
                                        succes: true,
                                        data: [
                                            {
                                                _id: "d37d9f9a-acf2-422a-a133-eb8db27bc506",
                                                tasklist: ["tuday", "salom", "hayer"],
                                                accomplished_tasks_count: 3,
                                                employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98",
                                                planned_tasks_count: 3,
                                                came_at: "2021-08-18T16:34:09.571+00:00",
                                                gone_at: "2021-08-18T16:34:09.571+00:00"
                                            },
                                            {
                                                _id: "d37d9f9a-acf2-422a-a133-eb8db27bc506",
                                                tasklist: ["tuday", "salom", "hayer", "menda u"],
                                                accomplished_tasks_count: 3,
                                                employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98",
                                                planned_tasks_count: 4,
                                                came_at: "2021-08-18T16:34:09.571+00:00",
                                                gone_at: "2021-08-18T16:34:09.571+00:00"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/absence ": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                summary: "Get all user",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "array",
                                            default: [
                                                {
                                                    type: "object",
                                                    properties: {
                                                        _id: {
                                                            type: "string"
                                                        },
                                                        reason: {
                                                            type: "string"
                                                        },
                                                        employee_id: {
                                                            type: "string"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    example: {
                                        succes: true,
                                        data: [
                                            {
                                                _id: "e1f7ca6c-7d32-4314-ae40-82086af80979",
                                                reason: "boshim og'rib qoldi",
                                                employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98"
                                            },
                                            {
                                                _id: "3f80e9ec-4053-435a-aea8-d48d0bba3581",
                                                reason: "Istima chiqib qoldi",
                                                employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/user/{id}": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                summary: "Get specific user",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                photo: {
                                                    type: "array",
                                                    default: [
                                                        {
                                                            type: "string"
                                                        }
                                                    ]
                                                },
                                                _id: {
                                                    type: "string"
                                                },
                                                first_name: {
                                                    type: "string"
                                                },
                                                last_name: {
                                                    type: "string"
                                                },
                                                age: {
                                                    type: "number"
                                                },
                                                job_position: {
                                                    type: "string"
                                                },
                                                gender: {
                                                    type: "string"
                                                },
                                                email: {
                                                    type: "string"
                                                },
                                                password: {
                                                    type: "string"
                                                },
                                                role: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            photo: ["/api/file/photo-1629292077838.png"],
                                            _id: "d7fc0dc6-c9ac-4e09-8af9-2c89321d607f",
                                            role: {
                                                name: "admin",
                                                operations: [
                                                    "adminGet",
                                                    "adminCreate",
                                                    "adminUpdate",
                                                    "adminDelete",
                                                    "userGet",
                                                    "userCreate",
                                                    "userUpdate",
                                                    "userDelete"
                                                ]
                                            },
                                            first_name: "Muhammadqodir",
                                            last_naem: "Parpiyev",
                                            age: 21,
                                            job_position: "Back-end",
                                            gender: "Erkak",
                                            user_name: "muhammadqodir",
                                            email: "parpiyev111@gmail.com",
                                            password:
                                                "$2b$10$c87P6zXV3jFbBkckYuSr/.TkQuWemxfab7Gm5BFnEBsFLom.HQBPK"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                    "403": {
                        $ref: "#/components/responses/"
                    }
                }
            }
        },
        "/time-stamp/{id}": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                summary: "Get specific user",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                _id: {
                                                    type: "string"
                                                },
                                                came_at: {
                                                    type: "data"
                                                },
                                                gone_at: {
                                                    type: "data"
                                                },
                                                tasklist: {
                                                    type: "array"
                                                },
                                                accomplished_tasks_count: {
                                                    type: "number"
                                                },
                                                planned_tasks_count: {
                                                    type: "number"
                                                },
                                                employee_id: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            _id: "d37d9f9a-acf2-422a-a133-eb8db27bc506",
                                            tasklist: ["tuday", "salom", "hayer"],
                                            accomplished_tasks_count: 3,
                                            employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98",
                                            planned_tasks_count: 3,
                                            came_at: "2021-08-18T16:34:09.571+00:00",
                                            gone_at: "2021-08-18T16:34:09.571+00:00"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    },
                    "403": {
                        $ref: "#/components/responses/"
                    }
                }
            }
        },
        "/absence/{id}": {
            get: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: {
                            type: "string"
                        }
                    }
                ],
                summary: "Get specific user",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                _id: {
                                                    type: "string"
                                                },
                                                reason: {
                                                    type: "string"
                                                },
                                                employee_id: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            _id: "e1f7ca6c-7d32-4314-ae40-82086af80979",
                                            reason: "boshim og'rib qoldi",
                                            employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/user/{id} ": {
            patch: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "query",
                        name: "first_name",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "last_name",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "photo",
                        schema: {
                            type: "array"
                        }
                    },
                    {
                        in: "query",
                        name: "age",
                        schema: {
                            type: "number"
                        }
                    },
                    {
                        in: "query",
                        name: "job_position",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "gender",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "user_name",
                        unique: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "email",
                        unique: true,
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "password (faqat userdi ozi edit qila oladi)",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "new_password",
                        schema: {
                            type: "string"
                        }
                    },
                    {
                        in: "query",
                        name: "role",
                        schema: {
                            type: "string 'adim || user'"
                        }
                    }
                ],
                summary: "edit user (admin || user)",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                _id: {
                                                    type: "string"
                                                },
                                                reason: {
                                                    type: "string"
                                                },
                                                employee_id: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            first_name: "Muhammadqodir",
                                            last_naem: "Parpiyev",
                                            age: 21,
                                            job_position: "Back-end",
                                            gender: "Erkak",
                                            user_name: "muhammadqodir",
                                            email: "parpiyev111@gmail.com",
                                            password:
                                                "$2b$10$c87P6zXV3jFbBkckYuSr/.TkQuWemxfab7Gm5BFnEBsFLom.HQBPK"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/time-stamp/{id} ": {
            patch: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "query",
                        name: "tasklist",
                        schema: {
                            type: "array"
                        }
                    },
                    {
                        in: "query",
                        name: "accomplished_tasks_count",
                        schema: {
                            type: "number"
                        }
                    }
                ],
                summary: "edit time-stamp (admin || user)",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                _id: {
                                                    type: "string"
                                                },
                                                reason: {
                                                    type: "string"
                                                },
                                                employee_id: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            _id: "d37d9f9a-acf2-422a-a133-eb8db27bc506",
                                            tasklist: ["tuday", "salom", "hayer"],
                                            accomplished_tasks_count: 3,
                                            employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98",
                                            planned_tasks_count: 3,
                                            came_at: "2021-08-18T16:34:09.571+00:00",
                                            gone_at: "2021-08-18T16:34:09.571+00:00"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/absence/{id} ": {
            patch: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [
                    {
                        in: "query",
                        name: "reason",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                summary: "edit absence (admin || user)",
                responses: {
                    "200": {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        },
                                        data: {
                                            type: "object",
                                            properties: {
                                                _id: {
                                                    type: "string"
                                                },
                                                reason: {
                                                    type: "string"
                                                },
                                                employee_id: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    },
                                    example: {
                                        success: true,
                                        data: {
                                            _id: "e1f7ca6c-7d32-4314-ae40-82086af80979",
                                            reason: "boshim og'rib qoldi",
                                            employee_id: "11c02e4a-433a-4bba-b31b-da2d96aebc98"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        $ref: "#/components/responses/auth-token-drink-not-found"
                    },
                    "401": {
                        $ref: "#/components/responses/auth-token-not-invalid"
                    }
                }
            }
        },
        "/user/{id}  ": {
            delete: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [],
                summary: "delete user (faqat admin delete qila oladi)",
                responses: {
                    "204": {
                        description: "No Content",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            $ref: "#/components/responses/auth-token-drink-not-found"
                        },
                        "401": {
                            $ref: "#/components/responses/auth-token-not-invalid"
                        }
                    }
                }
            }
        },
        "/time-stamp/{id}  ": {
            delete: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [],
                summary: "delete time-stamp",
                responses: {
                    "204": {
                        description: "No Content",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            $ref: "#/components/responses/auth-token-drink-not-found"
                        },
                        "401": {
                            $ref: "#/components/responses/auth-token-not-invalid"
                        }
                    }
                }
            }
        },
        "/absence/{id}  ": {
            delete: {
                security: [
                    {
                        JWT: []
                    }
                ],
                parameters: [{}],
                summary: "delete absence",
                responses: {
                    "204": {
                        description: "No Content",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        succes: {
                                            type: "string"
                                        }
                                    }
                                }
                            },
                            "404": {
                                $ref: "#/components/responses/auth-token-drink-not-found"
                            },
                            "401": {
                                $ref: "#/components/responses/auth-token-not-invalid"
                            }
                        }
                    }
                }
            }
        }
    }
}
