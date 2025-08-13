import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import items from "./create/itemsSlice";
import module from "./module/moduleSlice";

// إعداد التخزين
const rootPersistConfig = {
  key: "root",
  storage,
};

// دمج الـ reducers
const rootReducer = combineReducers({
  module: module,
  items: items,
});

// ربط الـ persist
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// إنشاء الـ store باستخدام الـ persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ← مطلوب مع redux-persist
    }),
});

// إنشاء persistor
const persistor = persistStore(store);

// التصدير
export { store, persistor };
