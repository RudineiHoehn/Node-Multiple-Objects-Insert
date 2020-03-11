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
  "T1": [
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
  "T2": [
    {
      "text": "Any text here table 02",
      "T3": [
        {
          "text": "Any text here for table 03",
          "T4": [
            {
              "text": "Any text here for table 04 - 01"
            },
            {
              "text": "Any text here for table 04 - 02"
            }
          ]
        }
      ],
      "T5": [
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
      "T3": [
        {
          "text": "Any text here for table 03 - object 2",
          "T4": [
            {
              "text": "Any text here for table 04 - 03"
            },
            {
              "text": "Any text here for table 04 - 04"
            }
          ]
        }
      ],
      "T5": [
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
