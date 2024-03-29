export interface FunQLRequest {
 schema: {
  contents: {
   dynamic: {
    models: {
     User: {
      doits: {
       loginRequest: {
        details: {
         set: {
          phone: number,
          countryCode: string
         },
         get?: {
          ok?: 0 | 1,
          phone?: 0 | 1,
          countryCode?: 0 | 1
         }
        }
       },
       login: {
        details: {
         set: {
          phone: number,
          code: string
         },
         get?: {
          user: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             }
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             }
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          token?: 0 | 1
         }
        }
       },
       insertProfileInfo: {
        details: {
         set: {
          name: string,
          lastName: string,
          gender: 'MALE' | 'FEMALE',
          birthDate?: any,
          postalCode?: string,
          email: any,
          creditCardNumber?: number
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       getUser: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             }
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1,
              states?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1,
             states?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              },
              cities?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              }
             },
             cities?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              state?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1
              },
              country?: {
               _id?: 0 | 1,
               createdAt?: 0 | 1,
               updateAt?: 0 | 1,
               name?: 0 | 1,
               enName?: 0 | 1,
               countryCode?: 0 | 1
              }
             }
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       getUsers: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1,
           lastName?: 1 | -1,
           birthDate?: 1 | -1,
           email?: 1 | -1,
           phone?: 1 | -1
          },
          name?: string,
          lastName?: string,
          level?: 'Admin' | 'Normal' | 'Editor' | 'Author' | 'Ghost'
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUser: {
        details: {
         set: {
          userId: string,
          name?: string,
          lastName?: string,
          gender?: 'MALE' | 'FEMALE',
          profilePicture?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          birthDate?: any,
          postalCode?: string,
          email?: any,
          creditCardNumber?: number
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUserRole: {
        details: {
         set: {
          _id: string,
          role: any[]
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       getMe: {
        details: {
         set?: any,
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       createUser: {
        details: {
         set?: {
          name: string,
          phone: number,
          lastName: string,
          gender: 'MALE' | 'FEMALE',
          birthDate?: any,
          postalCode?: string,
          email: any,
          creditCardNumber?: number,
          level: any,
          profilePicture: {
           _id: any,
           filename: string,
           type: string,
           size: number
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       addUserAddress: {
        details: {
         set: {
          userId?: string,
          address: {
           country: string,
           state: string,
           city: string,
           addressTxt: string,
           location: {
            type: string,
            location: any
           }
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       updateUserAddress: {
        details: {
         set: {
          userId?: string,
          address: {
           addressId: string,
           country?: string,
           state?: string,
           city?: string,
           addressTxt?: string,
           location?: {
            type: string,
            location: any
           }
          }
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       },
       makeAdmin: {
        details: {
         set: {
          phone: number,
          countryCode: string,
          name: string,
          lastName: string,
          gender: 'Male' | 'Female'
         },
         get?: {
          _id?: 0 | 1,
          name?: 0 | 1,
          lastName?: 0 | 1,
          phone?: 0 | 1,
          gender?: 0 | 1,
          birthDate?: 0 | 1,
          postalCode?: 0 | 1,
          level?: 0 | 1,
          email?: 0 | 1,
          isActive?: 0 | 1,
          creditCardNumber?: 0 | 1,
          addresses?: {
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1,
            states?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            cities?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            }
           },
           city?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            }
           },
           addressTxt?: 0 | 1,
           addressId?: 0 | 1
          }
         }
        }
       }
      }
     },
     Country: {
      doits: {
       createCountry: {
        details: {
         set: {
          name: string,
          enName: string,
          countryCode: any[],
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       updateCountry: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          countryCode?: any,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       deleteCountry: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCountry: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          }
         }
        }
       },
       getCountries: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          enName?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          countryCode?: 0 | 1,
          states?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     City: {
      doits: {
       createCity: {
        details: {
         set: {
          name: string,
          enName: string,
          stateId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       updateCity: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          stateId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       },
       deleteCity: {
        details: {
         set: {
          _id: string
         }
        }
       },
       getCity: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1
          }
         }
        }
       },
       getCities: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          stateId?: any,
          countryId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     State: {
      doits: {
       updateState: {
        details: {
         set: {
          _id: string,
          name?: string,
          enName?: string,
          countryId?: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       deleteState: {
        details: {
         set: {
          _id: string
         }
        }
       },
       createState: {
        details: {
         set: {
          name: string,
          enName: string,
          countryId: string,
          geometries?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       getState: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           name?: 1 | -1,
           enName?: 1 | -1
          },
          _id?: string,
          name?: string,
          enName?: string,
          countryId?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          cities?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           state?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           }
          }
         }
        }
       },
       getStates: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          countryId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          state?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           country?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            countryCode?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          },
          country?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           countryCode?: 0 | 1,
           states?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           },
           cities?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     BlogTag: {
      doits: {
       createBlogTag: {
        details: {
         set: {
          name: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1
         }
        }
       },
       updateBlogTag: {
        details: {
         set: {
          _id?: any,
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogTag: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       getBlogTags: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            addresses?: {
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             addressTxt?: 0 | 1,
             addressId?: 0 | 1
            }
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     BlogCategory: {
      doits: {
       createBlogCategory: {
        details: {
         set: {
          name: string,
          enName: string,
          icon?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       updateBlogCategory: {
        details: {
         set: {
          _id?: string,
          name?: string,
          enName?: string,
          icon?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       deleteBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getBlogCategory: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       getBlogCategories: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           name?: 1 | -1
          },
          name?: string,
          enName?: string,
          description?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       }
      }
     },
     Comment: {
      doits: {
       createComment: {
        details: {
         set: {
          content: string,
          blogPostId?: any,
          wareId?: any,
          commentStatus: 'ACCEPT' | 'PENDING' | 'REJECT',
          parentId?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       updateComment: {
        details: {
         set: {
          _id?: string,
          commentStatus: 'ACCEPT' | 'PENDING' | 'REJECT'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          enName?: 0 | 1,
          icon?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          description?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       },
       deleteComment: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getCommentReplies: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       },
       getComments: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           commentStatus?: 1 | -1,
           content?: 1 | -1
          },
          content?: string,
          blogPostId: string,
          commentStatus?: 'ACCEPT' | 'REJECT' | 'PENDING'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          }
         }
        }
       },
       getComment: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          content?: 0 | 1,
          commentStatus?: 0 | 1,
          user?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          },
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          },
          repliedComments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1
          }
         }
        }
       }
      }
     },
     BlogPost: {
      doits: {
       createBlogPost: {
        details: {
         set: {
          title: string,
          summary: string,
          content: string,
          photo?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          blogCategoryID: string,
          blogTagIDs: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       updateBlogPost: {
        details: {
         set: {
          _id?: string,
          title?: string,
          summary?: string,
          content?: string,
          photo?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          blogCategoryID?: string,
          blogTagIDs?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       deleteBlogPost: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       getBlogPost: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1,
            addresses?: {
             country?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1,
              countryCode?: 0 | 1
             },
             state?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             city?: {
              _id?: 0 | 1,
              createdAt?: 0 | 1,
              updateAt?: 0 | 1,
              name?: 0 | 1,
              enName?: 0 | 1
             },
             addressTxt?: 0 | 1,
             addressId?: 0 | 1
            }
           }
          }
         }
        }
       },
       getBlogPosts: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           title?: 1 | -1,
           content?: 1 | -1
          },
          title?: string,
          content?: string,
          blogCategory?: string,
          blogTags?: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       switchBlogPostLike: {
        details: {
         set: {
          _id: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          title?: 0 | 1,
          summary?: 0 | 1,
          content?: 0 | 1,
          photo?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           filename?: 0 | 1,
           type?: 0 | 1,
           size?: 0 | 1
          },
          totalLikes?: 0 | 1,
          totalViews?: 0 | 1,
          totalComments?: 0 | 1,
          author?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          comments?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           content?: 0 | 1,
           commentStatus?: 0 | 1,
           user?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogPost?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           },
           repliedComments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           }
          },
          likedUsers?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          },
          blogTags?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          },
          blogCategory?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           name?: 0 | 1,
           enName?: 0 | 1,
           icon?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           description?: 0 | 1,
           blogPosts?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            title?: 0 | 1,
            summary?: 0 | 1,
            content?: 0 | 1,
            photo?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            totalLikes?: 0 | 1,
            totalViews?: 0 | 1,
            totalComments?: 0 | 1
           }
          }
         }
        }
       },
       addToPromotions: {
        details: {
         set: {
          _id?: string
         }
        }
       }
      }
     },
     ContactUs: {
      doits: {
       createContactUs: {
        details: {
         set: {
          name: string,
          email: any,
          uploadedFiles: any,
          message: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       },
       deleteContactUs: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          blogPosts?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1
          }
         }
        }
       },
       getContactUs: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       },
       getContactUss: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1,
           message?: 1 | -1,
           name?: 1 | -1,
           email?: 1 | -1
          },
          name?: string,
          email?: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          name?: 0 | 1,
          email?: 0 | 1,
          uploadedFiles?: 0 | 1,
          message?: 0 | 1
         }
        }
       }
      }
     },
     Plan: {
      doits: {
       createPlan: {
        details: {
         set: {
          planType: 'Resindental' | 'Commercial' | 'Mixed',
          units: number,
          floors: number,
          planCode: string,
          exposure: any[],
          infrastructureArea: number,
          length: number,
          width: number,
          passageWidth: number,
          plateType: 'Registered' | 'Normal',
          photo?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          pdf?: {
           _id: any,
           filename: string,
           type: string,
           size: number
          },
          slider?: { _id: any, filename: string, type: string, size: number }[]
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          planType?: 0 | 1,
          units?: 0 | 1,
          floors?: 0 | 1,
          planCode?: 0 | 1,
          exposure?: 0 | 1,
          infrastructureArea?: 0 | 1,
          length?: 0 | 1,
          width?: 0 | 1,
          passageWidth?: 0 | 1,
          plateType?: 0 | 1,
          photo?: 0 | 1,
          slider?: 0 | 1,
          pdf?: 0 | 1,
          creator?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          }
         }
        }
       },
       getPlan: {
        details: {
         set: {
          _id: any
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          planType?: 0 | 1,
          units?: 0 | 1,
          floors?: 0 | 1,
          planCode?: 0 | 1,
          exposure?: 0 | 1,
          infrastructureArea?: 0 | 1,
          length?: 0 | 1,
          width?: 0 | 1,
          passageWidth?: 0 | 1,
          plateType?: 0 | 1,
          photo?: 0 | 1,
          slider?: 0 | 1,
          pdf?: 0 | 1,
          creator?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1
          }
         }
        }
       },
       getPlans: {
        details: {
         set: {
          pagination?: {
           lastObjectId?: string,
           limit?: number,
           page?: number
          },
          sort?: {
           createdAt?: 1 | -1,
           updateAt?: 1 | -1
          },
          planType?: 'Resindental' | 'Commercial' | 'Mixed',
          units?: number,
          floors?: number,
          sleeps?: number,
          bathroom?: number,
          planCode?: string,
          unitType?: 'Solo' | 'Duplex' | 'Triplex',
          exposure?: 'Northern' | 'Southern' | 'Eastern' | 'Western',
          infrastructureArea?: any,
          length?: any,
          width?: any,
          passageWidth?: number,
          plateType?: 'Registered' | 'Normal'
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          planType?: 0 | 1,
          units?: 0 | 1,
          floors?: 0 | 1,
          planCode?: 0 | 1,
          exposure?: 0 | 1,
          infrastructureArea?: 0 | 1,
          length?: 0 | 1,
          width?: 0 | 1,
          passageWidth?: 0 | 1,
          plateType?: 0 | 1,
          photo?: 0 | 1,
          slider?: 0 | 1,
          pdf?: 0 | 1,
          creator?: {
           _id?: 0 | 1,
           name?: 0 | 1,
           lastName?: 0 | 1,
           phone?: 0 | 1,
           gender?: 0 | 1,
           birthDate?: 0 | 1,
           postalCode?: 0 | 1,
           level?: 0 | 1,
           email?: 0 | 1,
           isActive?: 0 | 1,
           creditCardNumber?: 0 | 1,
           addresses?: {
            country?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1,
             countryCode?: 0 | 1
            },
            state?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            city?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             name?: 0 | 1,
             enName?: 0 | 1
            },
            addressTxt?: 0 | 1,
            addressId?: 0 | 1
           }
          }
         }
        }
       },
       deletePlan: {
        details: {
         set: {
          _id: any
         },
         get?: {
          msg: string
         }
        }
       }
      }
     }
    }
   },
   static: {
    models: {
     BlogFirstPage: {
      doits: {
       getBlogFirstPage: {
        details: {
         set: any,
         get?: never
        }
       }
      }
     },
     StoreHomePage: {
      doits: {
       getStoreHomePage: {
        details: {
         set: any,
         get?: never
        }
       },
       addToStoreHomePageSlider: {
        details: {
         set: {
          photo: any,
          title: any,
          subTitle: any,
          url: any,
          type: any
         }
        }
       }
      }
     }
    }
   },
   streams: {
    models: {
     File: {
      doits: {
       uploadFile: {
        details: {
         set: {
          file?: {
           filename: string,
           type: 'image/jpeg',
           content: any,
           size: number
          }
         }
        }
       },
       uploadPdf: {
        details: {
         set: {
          file?: {
           filename: string,
           type: 'application/pdf',
           content: any,
           size: number
          }
         }
        }
       },
       downloadFile: {
        details: {
         set: {
          _id: string,
          fileType: string
         },
         get?: {
          _id?: 0 | 1,
          createdAt?: 0 | 1,
          updateAt?: 0 | 1,
          filename?: 0 | 1,
          type?: 0 | 1,
          size?: 0 | 1,
          blogPost?: {
           _id?: 0 | 1,
           createdAt?: 0 | 1,
           updateAt?: 0 | 1,
           title?: 0 | 1,
           summary?: 0 | 1,
           content?: 0 | 1,
           photo?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            filename?: 0 | 1,
            type?: 0 | 1,
            size?: 0 | 1
           },
           totalLikes?: 0 | 1,
           totalViews?: 0 | 1,
           totalComments?: 0 | 1,
           author?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           comments?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            content?: 0 | 1,
            commentStatus?: 0 | 1
           },
           likedUsers?: {
            _id?: 0 | 1,
            name?: 0 | 1,
            lastName?: 0 | 1,
            phone?: 0 | 1,
            gender?: 0 | 1,
            birthDate?: 0 | 1,
            postalCode?: 0 | 1,
            level?: 0 | 1,
            email?: 0 | 1,
            isActive?: 0 | 1,
            creditCardNumber?: 0 | 1
           },
           blogTags?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1
           },
           blogCategory?: {
            _id?: 0 | 1,
            createdAt?: 0 | 1,
            updateAt?: 0 | 1,
            name?: 0 | 1,
            enName?: 0 | 1,
            icon?: {
             _id?: 0 | 1,
             createdAt?: 0 | 1,
             updateAt?: 0 | 1,
             filename?: 0 | 1,
             type?: 0 | 1,
             size?: 0 | 1
            },
            description?: 0 | 1
           }
          }
         }
        }
       }
      }
     }
    }
   }
  }
 };
}
