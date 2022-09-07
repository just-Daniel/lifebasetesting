Feature: Create coach
    Background: 
        Given I open page on ui        

    Scenario: Create a trainer, adding a discount
      Given I login on page
            | Name       | Password  |
            | studying2  | Qwerty123 |
      Given Add a new coach
            | FName   | LName   |
            | Mark    | Dyachuk |
       When Additional Information
            | Email              | Phone      |
            | vitala13@gmail.com | 0971234988 |
       When Filling in address fields
            | Address | City | State | Code  |
            | Luvarna | Lviv | AK    | 79025 |
       Then Discounts
            | Setup | Invoice | Renewal |
            | 3     | 5       | 7       |  
       Then I add password
            | Email              | Password | Repeat   | Pin  |
            | vitala13@gmail.com | 13131313 | 13131313 | 1313 |
       Then I verify if coach exists
            | Email              |
            | vitala13@gmail.com |