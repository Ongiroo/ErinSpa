## Getting Started
Use these instuctions to get the project up and running.

### Prerequisites
You will need the following tools:

* [Visual Studio Code or 2017](https://www.visualstudio.com/downloads/)
* [.NET Core SDK 2.1](https://www.microsoft.com/net/download/)

### Setup
Follow these steps to get your development environment set up:

  1. Clone the repository
  2. At the root directory, restore required packages by running:
     ```
     dotnet restore
     ```
  3. Next, build the solution by running:
     ```
     dotnet build
     ```
  4. Finally, within the `ErinSpa\ClientApp` directory, launch the project by running:
     ```
     dotnet run
     ```
   5. Finally, launch [http://localhost:5001/swagger/]() in your browser to view the Swagger UI for the ErinSpa API.
