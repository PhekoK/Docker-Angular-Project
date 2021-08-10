import { Location } from "@angular/common";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

describe ('Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardComponent, LoginComponent, RegisterComponent, AppComponent ],
            imports: [RouterTestingModule.withRoutes(routes)]
        })
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(AppComponent);
    });

    it("Should navigate to '/' redirects to '/dashboard' ", fakeAsync(() => {
        router.navigate([""]).then(() => {
            expect(location.path()).toBe('/dashboard');
        })
    }));

    it("Should navigate to 'dashboard' redirects to '/dashboard' ", fakeAsync(() => {
        router.navigate(["/dashboard"]).then(() => {
            expect(location.path()).toBe('/dashboard');
        })
    }));

    it("Should navigate to 'login' redirects to '/login' ", fakeAsync(() => {
        router.navigate(["/login"]).then(() => {
            expect(location.path()).toBe('/login');
        })
    }));

    it("Should navigate to 'register' redirects to '/regsiter' ", fakeAsync(() => {
        router.navigate(["/register"]).then(() => {
            expect(location.path()).toBe('/register');
        })
    }))
})