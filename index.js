
// Configure Redux store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (!isDataLoaded) {
      bootstrapRedux();
      setIsDataLoaded(true);
    }
  }, [isDataLoaded]); // Runs only when `isDataLoaded` changes

  return (
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider locale="en">
          <GridTest />
        </IntlProvider>
      </Provider>
    </React.StrictMode>
  );
}

function bootstrapRedux() {
  
}

// Function to handle authentication
async function login() {
  const widget = document.querySelector("#test#-connect");
  if (!widget) {
    document.body.innerHTML += `
      <div class="alert alert-danger" role="alert">
        No widget found to handle the authentication on this application!
      </div>
    `;
    return;
  }

  const #test#Connect = widget.#test#Connect;
  if (!#test#Connect) return;

  ConnectAuth = #test#Connect;

  if (#test#Connect.getAuthorizationError()) {
    document.body.innerHTML += `
      <div class="alert alert-danger" role="alert">
        Authorization error: ${#test#Connect.getAuthorizationError()}
      </div>
    `;
  } else if (#test#Connect.isAuthorized()) {
    initializeApp();
  } else {
    #test#Connect.requestAuthorization();
  }
}

// Function to initialize React app
function initializeApp() {
  const rootElement = document.querySelector("#root");
  if (!rootElement) return;

  const rootInstance = ReactDOM.createRoot(rootElement);
  rootInstance.render(<App />);
}

// Event listener for authentication
document.addEventListener("DOMContentLoaded", () => {
  const widget = document.querySelector("#test#-connect");
  if (widget) {
    widget.addEventListener("#test#-connect-ready", () => {
      login();
    });
  }
});
