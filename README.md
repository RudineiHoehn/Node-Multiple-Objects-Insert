# Node-Multiple-Objects-Insert
Exemple to use multiple insertion of objects (master detail), or list of simple objects

This project have two routes.

* The first router is defined to pass one list of simple object for insert into table "T1".
* The second router ,is defined to pass one object for insert into tables "T2", "T3", "T4" and "T5".

# table structure

###### T1
|Field | Type    |
|------|---------|
| id   | INTEGER |
| text | STRING  |


###### T2
|Field | Type    |
|------|---------|
| id   | INTEGER |
| text | STRING  |

###### T3
|Field | Type    |
|------|---------|
| id      | INTEGER |
| id_t2   | INTEGER |
| text    | STRING  |

###### T4
|Field | Type    |
|------|---------|
| id      | INTEGER |
| id_t3   | INTEGER |
| text    | STRING  |

###### T5
|Field | Type    |
|------|---------|
| id      | INTEGER |
| id_t2   | INTEGER |
| text    | STRING  |

______________________________________________________________
# Routers

###### (POST) T1
Parameters
```
{
  "t1": [
    {
      "text": "Any text here 01"
    },
    {
      "text": "Any text here 02"
    },
    {
      "text": "Any text here 03"
    }
  ]
}
```

###### (POST) T2
Parameters
```
{
  "t2": [
    {
      "text": "Any text here table 02",
      "t3": [
        {
          "text": "Any text here for table 03",
          "t4": [
            {
              "text": "Any text here for table 04 - 01"
            },
            {
              "text": "Any text here for table 04 - 02"
            }
          ]
        }
      ],
      "t5": [
        {
          "text": "Any text here 01 - Table 05"
        },
        {
          "text": "Any text here 02 - Table 05"
        },
        {
          "text": "Any text here 03 - Table 05"
        }
      ]
    },
    {
      "text": "Any text here table 02 - object 2",
      "t3": [
        {
          "text": "Any text here for table 03 - object 2",
          "t4": [
            {
              "text": "Any text here for table 04 - 03"
            },
            {
              "text": "Any text here for table 04 - 04"
            }
          ]
        }
      ],
      "t5": [
        {
          "text": "Any text here 04 - Table 05"
        },
        {
          "text": "Any text here 05 - Table 05"
        },
        {
          "text": "Any text here 06 - Table 05"
        }
      ]
    }
  ]
}
```

______________________________________________________________
# Use
* Node.js
* Postgres

# RUN
* Get a project - Pull
* Execute "yarn" in your terminal/cmd
* You need execute a postgres
* Create a new databease with name "test"
* Execute "yarn sequelize db:migrate" in your terminal/cmd
* Execute "yarn dev" in your terminal/cmd, to run
* After this, you cam use isomnia at routes (POST)
  "http://localhost:3333/t1a" and "http://localhost:3333/t2a", and use the json parameter above.
  
