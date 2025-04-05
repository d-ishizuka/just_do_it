package main

import (
	"just_do_it/controller"
	"just_do_it/db"
	"just_do_it/repository"
	"just_do_it/router"
	"just_do_it/usecase"
)

func main() {
	db := db.NewDB()
	userRepository := repository.NewUserRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepository)
	userController := controller.NewUserController(userUsecase)
	e := router.NewRouter(userController)
	e.Logger.Fatal(e.Start(":8080"))
}