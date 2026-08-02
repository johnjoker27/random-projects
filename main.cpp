#include <iostream>
#include <string>

using namespace std;

class Calculator{
public:

    void add(int a, int b)
    {
        cout << a+b << endl;
    }

    void add(int a , int b , int c)
    {
        cout << a+b+c << endl;
    }

    void add(float a, float b)
    {
        cout << a + b << endl;
    }

    void add(string s, int n)
    {
        cout << s << n<< endl;
    }

    void add(string s1, string s2)
    {
        cout << s1 + s2 << endl;
    }
};

int main()
{
    Calculator c;
    c.add(10,20);
    c.add(10,20,30);
    c.add(10.0f,20.0f);
    c.add("You are number ", 5);
    c.add("a black ","dancing cat");

    return 0;
}
