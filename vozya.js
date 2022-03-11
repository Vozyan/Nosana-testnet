#include <iostream>
#include <cmath>

using namespace std;
const double eps = 0.0001;
double Func(double x0)
{
    double x1;
    double T = 0.2732;
    int it = 0;
    while(true){
        it++;
    x1 = x0 - T*(3*x0+cos(x0)+1);
    if (fabs(x1-x0)<eps) break;
        cout<<"Iteration "<< it <<": x0 = "<< x0 << " x1 = "<<x1<<endl<<endl;
    x0=x1;
    }
    return x0;
}

int main(int argc, const char * argv[]) {
    double x = -0.5;
    double res;
    res = Func(x);
    cout<<"Answer: "<< res<< endl;
    return 0;
}
