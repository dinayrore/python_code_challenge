# Python Code Challenge - Appointments App

A simple single page Python web application that handles appointments. Appointments are stored in a sqlite3 database as follows:

```python
class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(verbose_name='date')),
                ('time', models.DateTimeField(verbose_name='time')),
                ('description', models.CharField(max_length=200)),
            ],
        ),
    ]
```

There are 3 types of requests that the back end Python script handles from the browser:

  1. If no  parameters are passed, the Python script renders index.html, which contains the front end (HTML5, CSS3, JS, Bootstrap 3.2.0).

  2. If any of the AJAX / jquery parameters are provided, then the request renders JSON.

  3. If a form submission request is completed, the Python script adds a NEW appointment to the sqlite3 database using the values from the HTML form.

This README is hosted on Github pages at: https://kteich88.github.io/python_code_challenge/

## Getting Started

The instructions below will help you retrieve a copy of the project to run on your local machine through the Terminal application. Please see deployment for notes on how to deploy the project on a live system.  The instructions provided are for macbook users only.

### Prerequisites

You may need to install or update the following software.

Find Terminal - to run program
  1. Open Finder. Finder is available in the Dock.
  2. Select Applications from the side bar menu.  Then unfold the Utilities folder.
  3. Double click on Terminal to initialize.

Install Homebrew - to store program files properly
  1. Open up Terminal.
  2. Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  3. Run `brew doctor`

Install Python3 to local directory
  1. Run brew install readline git python3 direnv tree wget trash bash-completion
  2. Run sudo easy_install pip

Once you have completed all of the above installation processes your system is ready to launch the program!

### Set-Up

Please complete the following procedure to run the program on a live system:
  1. Open Terminal.
  2. Change your directory to the one that which you would like to save this project. `$ cd folder_name`
  3. Then run the commands `$ git clone https://github.com/kteich88/python_code_challenge.git` and `$ cd python_code_challenge`
  4. Now create a new virtualenv by running: `$ python3 -m venv ~/.virtualenvs/djangodev`
  5. Finally, activate your virtualenv by running either `$ source ~/.virtualenvs/djangodev/bin/activate` OR `$ . ~/.virtualenvs/djangodev/bin/activate`
  6. After virtualenv activation is complete, run the following command: `pip install -e django/`
  7. The final command makes Django’s code importable, and the django-admin utility command available as well.

### Running Web Application Locally

  1. To run the web application in a local server use: `$ python manage.py runserver`
  2. You should see `Starting development server at http://127.0.0.1:8000/` in your Terminal.
  3. Go to http://127.0.0.1:8000/ in your web browser to view the application homepage.

## Built With

* Atom
* Appdirs==1.4.0
* Django 1.10.5
* packaging==16.8
* pyparsing==2.1.10
* six==1.10.0
* Bootstrap 3.2.0
* Utilizes: sqlite3 DB

## Author

* **Kristine Teichmann**
