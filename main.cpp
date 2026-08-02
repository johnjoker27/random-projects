#include <iostream>
#include <vector>

#include "StudentManager.h"

using namespace std;

int main()
{
    vector<Student> students;

    int choice;

    do
    {
        cout << "\n============================\n";
        cout << "      SCHOOL GRADING SYSTEM\n";
        cout << "============================\n";

        cout << "1. Add Student\n";
        cout << "2. Display Students\n";
        cout << "3. Exit\n";

        cout << "Enter choice: ";
        cin >> choice;

        switch(choice)
        {
        case 1:
            addStudent(students);
            break;

        case 2:
            displayStudents(students);
            break;

        case 3:
            cout << "Exiting... BYE!!\n";
            break;

        default:
            cout << "Invalid choice.\n";
        }

    } while(choice != 3);

    return 0;
}
