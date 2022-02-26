import React, { useState } from 'react';
import {
	Grid,
	List,
	ListItem,
	TextField,
	Typography,
	Container,
	FormControl,
	Box,
	FilledInput,
	InputAdornment,
	DateRange,
	Autocomplete,
	Button,
	Input,
	InputLabel,
	MenuItem,
	Select,
	ListSubheader
} from '@mui/material';
import { v4 as uuidv4, v4 } from 'uuid';

// import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// import firebase from 'firebase/compat/app';
import { firestore, postToJSON } from '../lib/firebase';

export default function createRecipe(props) {
	const [ dish, setDish ] = useState('');
	const [ ingredients, setIngredients ] = useState('');
	const [ duration, setDuration ] = useState('');
	const [ serving, setServing ] = useState('');
	const [ method, setMethod ] = useState('');
	const submitHandler = async () => {
		var recipeId = v4();
		try {
			console.log(dish);
			console.log(ingredients);
			console.log(duration);
			console.log(serving);
			console.log(method);
			firebase
				.firestore()
				.collection('missingItems')
				.doc(recipeId)
				.set({
					dish: dish,
					ingredients: ingredients,
					duration: duration,
					serving: serving,
					method: method
				})
				.then(() => alert('Recipe Has Been Submitted to Cloud Firestore'));
		} catch (err) {
			alert(err);
		}
	};
	return (
		<div>
			<div style={{ marginTop: '80px' }} />

			<form onSubmit={submitHandler}>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					style={{ backgroundColor: 'White', padding: '10px' }}
				>
					<Grid item xs={12}>
						<Typography style={{ fontSize: '40px' }}> Create Recipe </Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required={true}
							fullWidth
							id="dish"
							label="Enter Dish Name"
							onChange={(e) => setDish(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							required={true}
							fullWidth
							id="ingredients"
							label="Ingredients(description)"
							onChange={(e) => setIngredients(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							required={true}
							fullWidth
							id="duration"
							label="Cooking Duration"
							onChange={(e) => setDuration(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							required={true}
							fullWidth
							id="serving"
							label="Serving Size"
							onChange={(e) => setServing(e.target.value)}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							required={true}
							fullWidth
							id="method"
							label="Method of Cooking"
							onChange={(e) => setMethod(e.target.value)}
						/>
					</Grid>
					<Grid item xs={9} />
					<Grid item xs={3}>
						<List>
							<ListItem>
								<Button
									style={{
										background: '#366e97',
										color: 'white',
										width: '150px',
										height: '70px'
									}}
									type="submit"
								>
									Submit
								</Button>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
