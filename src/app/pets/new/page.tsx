"use client";

import { usePetContext } from "@/context/PetContext";
import { HandlePetActions } from "@/hooks/HandlePetReducer";
import { PetType } from "@/types/Pet";
import { generateUUId } from "@/utils/utils";
import { PetValidate } from "@/utils/validateForm";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPetPage({ params }: any) {
  const router = useRouter();
  const { id } = params;
  const [pet, setPet] = useState<PetType>();
  const { state, dispatch } = usePetContext();

  const createPet = (pet: PetType) => {
    dispatch({ type: HandlePetActions.ADD_PET, payload: pet });
  };

  const updatePet = (updatedPet: PetType) => {
    dispatch({ type: HandlePetActions.UPDATE_PET, payload: updatedPet });
  };

  const fetchPet = (id: string) => {
    const pet = state.pets.find((pet) => pet.id === id);
    if (pet) {
      setPet(pet);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const body: PetType = {
      name: e.target.name.value,
      age: 0,
      breed: "",
      description: e.target.description.value,
      status: e.target.status.value,
      picture: e.target.image.value || "",
      id: generateUUId(),
    };
    if (id) {
      updatePet(body);
    } else {
      createPet(body);
      router.refresh();
      router.push("/pets");
    }
  };

  useEffect(() => {
    if (id) {
      fetchPet(id);
    }
  }, [id, pet]);

  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Agrega una mascota
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={onSubmit}
          >
            <p className="text-center text-lg font-medium">
              Agrega una nueva mascota
            </p>

            <div>
              <label htmlFor="name" className="sr-only">
                Nombre
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  id="name"
                  name="name"
                  placeholder="nombre de la mascota"
                  defaultValue={pet?.name}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="sr-only">
                Descripcion
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  id="description"
                  placeholder="describa la mascota"
                  defaultValue={pet?.description}
                  name="description"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="image" className="sr-only">
                imagen
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  id="image"
                  name="picture"
                  placeholder="url de la imagen"
                  defaultValue={pet?.picture}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="relative">
              <select
                className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
                name="status"
                id="status"
                defaultValue={pet?.status}
              >
                <option defaultValue={pet?.status}>{pet?.status}</option>
                <option value="HOME">Avi</option>
                <option value="WORK">Work</option>
                <option value="SPORT">Sport</option>
              </select>{" "}
            </div>

            {id ? (
              <button
                type="submit"
                className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
              >
                Actualizar mascota
              </button>
            ) : (
              <button
                type="submit"
                className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
              >
                Agregar mascota
              </button>
            )}

            <p className="text-center text-sm text-gray-500">
              <Link className="underline" href="/pets">
                ver mis mascotas
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
